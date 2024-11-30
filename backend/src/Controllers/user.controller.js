import User from "../Database/Models/Users.model.js";

// function: Controller to get Fetch all users from database.
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    if (!allUsers) {
      throw new Error("No User Found");
    }

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function: Controller to create a user.
const createUsers = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(200).json(userExists);

    const newUser = await User.create({
      name,
      email,
      mobile,
      password,
    });

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Function: To Update user using email
const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const updateduser = await User.findByIdAndUpdate(
      userId,
      { statusState: "online" },
      { new: true }
    );

    res.status(200).json({ updateduser });
  } catch (error) {
    console.error("Error in updateprofile controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//function: Controller to fetch user by id
const getUserInfoById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id: ", id);
    const userExists = await User.findOne({ _id: id });

    if (userExists) res.status(200).json(userExists);
    else res.status(404).json({ message: "User Not Found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsers, createUsers, updateProfile, getUserInfoById };
