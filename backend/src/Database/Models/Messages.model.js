import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
  {
    readReceipt: {
      type: String,
      required: [true, "Read Receipt Mandatory"],
      enum: {
        values: ["sent", "received", "read"],
        message: `Ivalid value {VALUE}`,
      },
    },
    messageContent: { type: String },
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "Sender cannot be Empty"],
    },
    sentTo: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Users",
      required: [true, "At Least One senderId required"],
      validate: {
        validator: (v) => v.length > 0,
        message: `{VALUE} At least One Sender is needed`,
      },
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("Messages", MessagesSchema);
export default messageModel;
