import React, { useState, useEffect } from "react";
import Video from "./Video";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../util/APIRoutes";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        theme: "colored",
        pauseOnHover: true,
        draggable: true,
    };
    async function signIn(event) {
        event.preventDefault();
        if (validate()) {
            const response = await axios.post(login, {
                email,
                password,
            });
            console.log(response.data);
        } else {
            toast.error(data.message, toastOptions);
            console.log(data);
        }
    }
    const validate = () => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!email || !password) {
            toast.error("Email and Password are required.", toastOptions);
            return false;
        } else if (regex.test(email) === false) {
            toast.error("Email is not Valid.", toastOptions);
            return false;
        }

        return true;
    };

    return (
        <>
            <Video />
            <div style={formContainer}>
                <h1>Login</h1>
                <form onSubmit={signIn} style={formStyle}>
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
                            <Link to="/register">New member?</Link>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
export default Login;
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
