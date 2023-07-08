const Task = require("../model/task");
const mongoose = require("mongoose");

exports.createTask = async (req, res) => {
    const data = req.body;

    const task = await Task.create(data);
    return res.status(201).json({
        status: true,
        MessageChannel: "Task created Successfully!",
        task: task,
    });
};

exports.getTask = async (req, res) => {
    const task = await Task.find();
    if (!Task) {
        return res
            .status(404)
            .json({ status: false, message: "no task found" });
    }
    return res.status(200).json({
        status: true,
        message: "task fetched successfully",
        tasks: task,
    });
};

exports.getTaskById = async (req, res) => {
    const taskId = req.params.taskId;
    const task = await Task.findById({ taskId: taskId });
    if (!task) {
        return res
            .status(404)
            .json({ status: false, message: "no task found" });
    }
    return res.status(200).json({
        status: true,
        message: "task details fetched successfully",
        task: task,
    });
};

exports.updateTaskById = async (req, res) => {
    const taskId = req.params.taskId;
    const data = req.body;
    const task = await Task.findByIdAndUpdate({ taskId, data }, { new: true });
    if (!task) {
        return res
            .status(404)
            .json({ status: false, message: "no task found" });
    }
    return res.status(200).json({
        status: true,
        message: "task updated successfully",
        task: task,
    });
};

exports.deleteTaskById = async (req, res) => {
    const taskId = req.params.taskId;
    const task = await Task.findByIdAndDelete({ taskId: taskId });
    if (!task) {
        return res
            .status(404)
            .json({ status: false, message: "no task found" });
    }
    return res.status(200).json({
        status: true,
        message: "task deleted successfully",
        task: task,
    });
};
