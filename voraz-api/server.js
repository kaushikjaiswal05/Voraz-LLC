import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, 
      subject: "New Contact Form Submission from Voraz LLC",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending Message:", error);
        return res.status(500).send({ success: false, error: error.message });
      }
      res
        .status(200)
        .send({ success: true, message: "Message sent successfully" });
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
