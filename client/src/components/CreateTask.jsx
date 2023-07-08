import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDuedate] = useState("");
    const [user, setUser] = useState("");
    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        theme: "colored",
        pauseOnHover: true,
        draggable: true,
    };
    async function TaskSubmit(event) {
        event.preventDefault();
        const response = await axios.post("", {
            title,
            description,
            dueDate,
            user,
        });
        console.log(response.data);
    }
    return (
        <>
            <div style={formContainer}>
                <h1>Create Task</h1>
                <form onSubmit={TaskSubmit} style={formStyle}>
                    <div>
                        <label htmlFor="title"> Title </label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="your task title"
                        />
                    </div>
                    <div>
                        <label htmlFor="description"> Description </label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            name="description"
                            id="description"
                            cols="50"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="due_date">Due_date </label>
                        <input
                            onChange={(e) => setDuedate(e.target.value)}
                            type="Date"
                            id="due_date"
                            name="due_date"
                            placeholder="your task title"
                        />
                    </div>
                    <div>
                        <label htmlFor="user"> Assign User </label>
                        <select name="user" id="user">
                            <option value="john">John</option>
                            <option value="Danny">Danny</option>
                            <option value="Harry">Harry</option>
                            <option value="Devil">Devil</option>
                            <option value="john">John</option>
                        </select>
                    </div>
                </form>
                <div>
                    <button type="submit">Create task</button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default CreateTask;
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
