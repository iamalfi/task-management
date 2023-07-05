const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://Alfiya:Alfiya%40123@cluster0.gc3lqdx.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((result) => {
        console.log("mongodb is connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000");
});
