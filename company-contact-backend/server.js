// const express = require("express");
// const nodemailer = require(nodemailer);
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config(); //lpoad the hidden password from .env file

// const app = express();

// //tools config
// app.use(cors());//this allows out react frontend to talk to this backend
// app.use(express.json()); // this allow s server to read JSON text data sent by react


// //setup nodemailer "Transpeoter" (yout backends mail carrirer)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth:{
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// //Creating the API route (the specific address react wil send data to)
// app.post("/api/contact", async(req, res)={
//     //Grab the data that user typed into the react form
//     const {name, email, subject, message} = req.body;

//     //Design the email layout
//     const mailOptions={
//         from: `"${name}"`
//     }
// })

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

// Load the hidden passwords from the .env file
dotenv.config();

const app = express();

// Tools configuration
app.use(cors()); // Allows our React frontend to talk to this backend
app.use(express.json()); // Allows our server to read JSON text data sent by React

// Setup the Nodemailer "Transporter" (Your backend's mail carrier)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create the API route (The specific address React will send data to)
app.post("/api/contact", async (req, res) => {
  // Grab the data that the user typed into the React form
  const { name, email, subject, message } = req.body;

  // Design the email layout
  const mailOptions = {
    from: `"${name}" <${email}>`, // Who sent it
    to: process.env.EMAIL_USER,    // Sent TO your company email
    replyTo: email,               // If you click "Reply" in Gmail, it goes to the user
    subject: `Website Contact: ${subject}`,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions);
    // Tell React: "Everything went perfectly!"
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    // Tell React: "Something broke on the server."
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server so it listens for requests on Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend engine is running on port ${PORT}`));