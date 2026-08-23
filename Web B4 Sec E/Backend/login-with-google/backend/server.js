import express from "express";
import { config } from "dotenv"
import { OAuth2Client } from "google-auth-library";
import cors from "cors"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
const app = express();
config();
app.use(express.json());
app.use(cors());
app.get("/home", (req, res) => {
  res.send("home api");
});

app.get("/products", (req, res) => {
  res.send(
    JSON.stringify([
      {
        id: 1,
        name: "Laptop",
        price: 800,
        inStock: true,
      },
      {
        id: 2,
        name: "Phone",
        price: 500,
        inStock: false,
      },
      {
        id: 3,
        name: "Headphones",
        price: 100,
        inStock: true,
      },
    ]),
  );
});


app.post("/login-with-google", async (req, res) => {
  try {
    const body = req.body;
    const ticket = await client.verifyIdToken({
      idToken: body.credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(payload);

    res.status(200).json({
      message: "Logged in successfully",
      user: payload,
    })

  } catch (err) {
    console.log(err)
  }
})

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
