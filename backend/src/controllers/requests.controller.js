import User from "../models/user.model.js";
import FriendRequest from "../models/requests.model.js";

// Function to fetch all sent requests.
export const getAllSentRequests = async (req, res) => {
  try {
    const senderId = req.user._id;

    const requests = await FriendRequest.find({ sender: senderId });

    if (!requests || requests.length == 0)
      return res.status(404).json({ message: "No Friend Requests found" });

    res.status(200).json({
      message: "Sent friend requests fetched Successfully",
      data: requests,
    });
  } catch (error) {
    console.log("Error while fetching sent friend requests.", error);
    res
      .status(500)
      .json({ message: "Error fetching sent requests", error: error });
  }
};

// Function to fetch receive requests
export const getAllReceivedRequests = async (req, res) => {
  try {
    const receiverId = req.user._id;

    const requests = await FriendRequest.find({ receiver: receiverId });

    if (!requests || requests.length == 0)
      return res.status(404).json({ message: "No Friend Requests received" });

    res.status(200).json({
      message: "Friend requests fetched successfully",
      data: requests,
    });
  } catch (error) {
    console.log("Error while fetching friend requests.", error);
    res.status(500).json({
      message: "Error while fetching received requests",
      error: error,
    });
  }
};

// Function to send friend requests
export const sendRequests = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { receiverId } = req.body;
    const receiver = await User.findById(receiverId);

    //!FTC fl-2-chk {
    // Prevent user from sending request to themselves.
    if (receiverId === senderId.toString())
      return res
        .status(400)
        .json({ message: "Cannot send friend req   uest to yourself!" });

    // Check if receiver already exists.
    if (!receiver)
      return res.status(404).json({ message: "Recepient not found!" });

    // Prevent user from sending request to another user who is already a friend
    if (receiver.friends.includes(senderId))
      return res
        .status(400)
        .json({ message: `Already frineds with ${receiver.name}` });

    const existingRequest = await FriendRequest.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    });

    if (existingRequest?.length)
      return res
        .status(400)
        .json({ message: "Friend request already exists." });

    //! }

    const payload = {
      sender: senderId,
      receiver: receiverId,
      status: "pending",
    };

    const request = await FriendRequest.create(payload);

    res.status(201).json({ message: "request sent successfully" });
  } catch (error) {
    console.log("error while sending friend requests.", error);
    res
      .status(500)
      .json({ message: "Error while sending request", error: error });
  }
};

// Function to accept friend requests
export const acceptRequests = async (req, res) => {
  try {
    const { requestId } = req.body;
    const userId = req.user._id;

    const receivedRequest = await FriendRequest.findById(requestId);

    if (!receivedRequest)
      return res.status(404).json({ message: "Friend request not found" });

    // Checking if friend request to send to yourself
    if (
      receivedRequest.sender.toString() === userId ||
      (receivedRequest.sender.toString() === userId &&
        receivedRequest.receiver.toString() === userId)
    )
      return res
        .status(400)
        .json({ message: "Cannot send request to yourself" });

    // Accepting the friend request
    receivedRequest.status = "accepted";
    await receivedRequest.save();

    // Adding current user as a friend in sender's/recipeant's friends list
    const senderResult = await User.findByIdAndUpdate(receivedRequest.sender, {
      $addToSet: {
        friends: receivedRequest.receiver,
      },
    });

    // Adding sender/recepient as a friend in current user's friends list
    const receierResult = await User.findByIdAndUpdate(
      receivedRequest.receiver,
      {
        $addToSet: {
          friends: receivedRequest.sender,
        },
      },
    );

    res.status(200).json({ message: "Friend request accepted." });
  } catch (error) {
    console.log("error while accepting requests", error);
    res
      .status(500)
      .json({ message: "error while accepting requests", error: error });
  }
};

// Function to reject friend requests
export const rejectRequests = async (req, res) => {
  try {
    const { requestId } = req.body;

    const receivedRequest = await FriendRequest.findOne({ id: requestId });

    if (!receivedRequest)
      return res.status(404).json({ message: "Friend rwquest not found" });

    if (
      receivedRequest.sender.toString() === req.user.id ||
      (receivedRequest.sender.toString() === req.user.id &&
        receivedRequest.receiver.toString() === req.user.id)
    )
      return res
        .status(400)
        .json({ message: "Cannot send request to yourself" });

    receivedRequest.status = "rejected";
    await receivedRequest.save();
    res.status(200).json({ message: "Friend request rejected successfully" });
  } catch (error) {
    console.log("error while rejecting requests: ", error);
    res
      .status(500)
      .json({ message: "error while rejecting requests", error: error });
  }
};
