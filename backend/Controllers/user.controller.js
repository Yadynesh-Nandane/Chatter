import User from "../Database/Models/Users.model.js";

// function: Controller to get Fetch all users from database.
const getAllUsers = async (req, res) => {

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

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//function: Controller to fetch user by id
const getUserInfoById = async (req, res) => {};

export { getAllUsers, createUsers, getUserInfoById };
