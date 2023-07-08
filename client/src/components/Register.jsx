import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import { Link, useNavigate } from "react-router-dom";
import Video from "./Video";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { signup } from "../util/APIRoutes";

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        theme: "colored",
        pauseOnHover: true,
        draggable: true,
    };
    async function signUp(event) {
        event.preventDefault();
        let response;
        if (validate()) {
            response = await axios.post(signup, {
                username,
                email,
                password,
            });
            console.log(response.data);
            navigate("/login");
        } else {
            // toast.error(toastOptions);
            console.log(response);
        }
    }
    const validate = () => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (username.length === 0) {
            toast.error("Username is required.", toastOptions);
            return false;
        } else if (!email || regex.test(email) === false) {
            toast.error("Email is not Valid.", toastOptions);
            return false;
        } else if (!password) {
            toast.error("Password is required.", toastOptions);
            return false;
        } else if (password.length < 6) {
            toast.error(
                "Password must be equal or greater than 6 characters.",
                toastOptions
            );
            return false;
        }

        return true;
    };
    return (
        <>
            <Video />
            <div style={formContainer}>
                <h1>Register</h1>
                <form onSubmit={signUp} style={formStyle}>
                    <div>
                        <label htmlFor="username"> Username </label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"> Password </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="your password"
                        />
                    </div>

                    <div>
                        <button type="submit">sign up</button>
                        <p>
                            <Link to="/login">Already a member?</Link>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Register;
const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "70%",
};
const formContainer = {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "50%",
};
