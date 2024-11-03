import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
  {
    readReceipt: { type: String },
    messageContent: { type: String },
    sentBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    sentto: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  },
  { timestamps: true }
);

const messageModel = mongoose.model("Messages", MessagesSchema);
export default messageModel;
