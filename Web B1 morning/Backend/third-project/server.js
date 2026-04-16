import express from "express";

const app = express();

app.use(express.json());
// create User
app.post("/create-user", (req, res) => {
  const body = req.body;
  if (body) {
    res.json({
      user: body,
      message: "User Creatd Successfully",
      success: true,
    });
  } else {
    res.json({
      user: null,
      message: "Something Went Wrong!",
      success: false,
    });
  }
});

// Delete User
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
});

// update User
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log("id:", id, "Body: ", body);
});

// user Detail
app.get("/user-detail/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(userId);
});

// All users
app.get("/users", (req, res) => {
  res.send("All Users");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
