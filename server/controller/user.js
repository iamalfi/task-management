const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signUpValidation } = require("../middleware/validation");

exports.createUser = async (req, res) => {
    let data = req.body;
    let { username, email, password } = data;
    let error = signUpValidation(data);

    if (error) {
        console.log(error);
        error = error.details[0].message;
        return res.status(422).json({ status: false, error });
    }
    if (!password || !email || !username) {
        return res.status(400).json({
            status: false,
            message: "email, username and password is required",
        });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
        return res
            .status(400)
            .json({ status: false, message: "user is already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    res.status(201).json({
        status: true,
        message: "User created successfully",
        user: user,
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!password && !email == "@") {
        return res
            .status(400)
            .json({ status: false, message: "email and password is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res
            .status(404)
            .json({ status: false, message: "email not found" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
        return res.status(400).json({
            status: false,
            message: "email and password is incorrect!",
        });
    }
    const token = await jwt.sign(
        { user: user.id, email: email },
        "secretToken",
        { expiresIn: "24h" }
    );

    return res.status(200).json({
        status: true,
        message: "user logged in successfully",
        user: {
            user: user._id,
            email: user.email,
            token: token,
        },
    });
};
