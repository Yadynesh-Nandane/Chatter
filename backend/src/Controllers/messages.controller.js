import Messages from "../Database/Models/Messages.model.js";

const sendMessage = async (req, res) => {
  try {
    const { messageContent } = req.body.messageContent;
    console.log("request body: ", req.body);
    const sentBy = req.user._id;
    const sentTo = req.params.id;
    const readReceipt = req.body.readReceipt || "sent";

    const createdMessage = await Messages.create({
      readReceipt,
      messageContent,
      sentBy,
      sentTo,
    });
    res.status(200).json(createdMessage);
  } catch (error) {
    console.log("working");
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getAllMessagesByReceiverId = async (req, res) => {
  try {
    // console.log("request : ", req);
    // const senderId = req.query.sentBy;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    // const messageExists = await Messages.find({sentBy: senderId});
    const messageExists = await Messages.find({
      $or: [
        { sentBy: senderId, sentTo: receiverId },
        { sentBy: receiverId, sentTo: senderId },
      ],
    });

    if (messageExists) res.status(200).json(messageExists);
    else res.status(404).json({ message: "Start Messaging" });

    // todo: realtime messaging logic goes here => WebSocket.io
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMessage = async () => {};

export { createMessage, getAllMessagesByReceiverId, sendMessage };
