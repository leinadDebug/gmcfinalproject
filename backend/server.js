const express = require("express");
const { chats } = require("./data/data");
const dotenv  = require("dotenv");
const useRoutes = require('./route/userRoutes');
const connectDB = require("./config/db");

dotenv.config();

connectDB();
const app = express();
app.use(express.json()); // access the json data

const PORT = process.env.PORTNUMBER || 5000;

app.get("/", (req, res) => {
  res.send("Api is runnung");
});

app.use('/api/user', useRoutes)

app.get("/api/chats", (req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*') // / Set the 'Access-Control-Allow-Origin' header to '*' to allow requests from any origin. // as it can have security implications. You might want to restrict access to specific origins.
   chats ? res.send(chats) : console.error("No chat data found")

 });

app.get("/api/chats/:_id", async (req, res) => {
    try {
       const chat = await chats.find(obj=> obj._id === req.params._id); // query the chat using the _id parameter
       res.status(200).json(chat); // send the chat as a response
    } catch (error) {
       res.status(500).json({ message: 'Error retrieving chat.' }); // send an error response if an exception occurs
    }
   });

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
