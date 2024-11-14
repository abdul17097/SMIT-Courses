const addUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isExistEmail = await User.findOne({
      email,
    });
    if (isExistEmail) {
      return res.json({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.json({
      success: true,
      message: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
};

module.exports = { addUserController };
