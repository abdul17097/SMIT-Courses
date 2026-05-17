export const allUsers = (req, res) => {
  const id = req.user;
  console.log(id, "allusers file");

  // db.blog.find({userId: id})
  res.json({
    message: "all users",
  });
};
