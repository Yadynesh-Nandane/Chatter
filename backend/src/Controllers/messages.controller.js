import Messages from "../Database/Models/Messages.model.js";

const createMessage = async (req, res) => {
  try {
    const { readReceipt, messageContent, sentBy, sentTo } = req.body;
    console.log("request: ", req);

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
const getAllMessagesBySenderId = async (req, res) => {
  try {
    console.log("request : ", req);
    // const senderId = req.query.sentBy;
    const senderId = req.params.id;

    const messageExists = await Messages.find({ sentBy: senderId });

    if (messageExists) res.status(200).json(messageExists);
    else res.status(404).json({ message: "Start Messaging" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createMessage, getAllMessagesBySenderId };
