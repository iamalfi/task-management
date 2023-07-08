import { useState, useEffect } from "react";
// import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/task" element={<CreateTask />} />
            </Routes>
        </>
    );
}

export default App;
