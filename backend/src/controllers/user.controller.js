import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const { phone } = req.body;
    const userId = req.user._id;

    if (!phone) {
      return res.status(400).json({ message: "Phone number required." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { phone },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error while updating user: ", error);
    res.status(500).json({ message: "User not updated, Try Again!" });
  }
};

export const getAllFriends = async (req, res) => {
  try {
    const userId = req.user._id;

    // INFO: Populate function fetchs details of all the ids present in friends field
    // INFO: exec() function returns a true promise
    const usersFriends = await User.findById(userId)
      .populate("friends", "name email phone friends")
      .exec();

    if (!usersFriends || usersFriends.friends.length == 0) {
      return res
        .status(404)
        .json({ message: "No friends added, add friends to chat." });
    }

    res.status(200).json(usersFriends);
  } catch (error) {
    console.error("Error fetching friends: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
