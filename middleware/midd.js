const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.authentication = async (req, res, next) => {
    try {
        let bearertoken = req.headers("authorization");
        if (!bearertoken) {
            return res
                .status(400)
                .send({ status: false, msg: "bearertoken is required" });
        }

        const token = bearertoken.split(" ")[1];
        let verifiedToken = await jwt.verify(
            token,
            "secretToken",
            (error, token) => {
                if (error) {
                    return res.status(401).send({ msg: error.message });
                } else {
                    req.decodedToken = token;
                    // return token
                    next();
                }
            }
        );

        // req.decodedToken=verifiedToken;
    } catch (error) {
        return res.status(500).send({ status: true, msg: error.message });
    }
};
