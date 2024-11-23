import { Database, closeDBConnection } from "../Database/connect.js";
import Friends from "../Database/Models/Friends.model.js";

const addFriends = async (req, res) => {
  try {
    const { userId, addedFriends } = req.body;
    const addedFriend = await Friends.create({ userId, addedFriends });
    console.log("friend added", addedFriend);
    res.status(200).json(addedFriend);
  } catch (error) {
    res.status(500).json({ message: error.message, code: error.code });
  }
};

const getAllFriends = async (req, res) => {
  try {
    const userId = req.params.id;

    // ! It Throughs;TypeError: Converting circular structure to JSON if await is not used in below line
    const friendExists = await Friends.find({ userId: userId });
    if (friendExists) res.status(200).json(friendExists);
    else res.status(404).json({ message: "User Not Found" });
  } catch (error) {
    console.error("backend error: ", error);
    res.status(500).json({ message: error.message });
  }
};

const removeFriend = (req, res) => {};

export { addFriends, getAllFriends, removeFriend };
