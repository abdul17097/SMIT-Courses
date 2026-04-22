export const profile = (req, res) => {
  res.status(200).json({
    message: "user Profile Data",
    success: true,
    data: "ASDf",
  });
};

// for admin
export const deleteUser = (req, res) => {
  res.status(200).json({
    message: "user  Delelted Success",
    success: true,
    data: null,
  });
};
