import Message from "../models/message.model.js";

export const getMessage = async (req, res) => {
  try {
    const { id: sentToId } = req.params;
    const messagerId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: messagerId, receiverId: sentToId },
        { senderId: sentToId, receiverId: messagerId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMassages: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


// senderId: 687031e8adda4b487aa99f1f
// receiverId: 686fe1abc04c18c66b9b6eac