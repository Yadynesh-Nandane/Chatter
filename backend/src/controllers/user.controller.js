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
