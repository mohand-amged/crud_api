// courses.controllers.js
const { validationResult } = require('express-validator');
const courses = require('../data/courses.js'); // <-- Import the array directly

const getAllCourses = (req, res) => {
    res.json(courses);
};

const getCourse = (req, res) => {
    const courseId = +req.params.id; // Convert id to a number
    const course = courses.find(c => c.id === courseId); // <-- Use the array's find method
    if (!course) {
        return res.status(404).json({ msg: "Course not Found" });
    }
    res.json(course);
};

const addCourse = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);
    res.status(201).json(courses);
};

const updateCourse = (req, res) => {
    const courseId = +req.params.courseId; // Use params instead of body for consistency
    const courseIndex = courses.findIndex(c => c.id === courseId); // Find the index of the course
    if (courseIndex === -1) {
        return res.status(404).json({ msg: "Course not Found" });
    }

    courses[courseIndex] = { ...courses[courseIndex], ...req.body }; // Update the course
    res.status(200).json(courses[courseIndex]);
};

const deleteCourse = (req, res) => {
    const courseId = +req.params.courseId; // Use params instead of body for consistency
    const courseIndex = courses.findIndex(c => c.id === courseId); // Find the index of the course
    if (courseIndex === -1) {
        return res.status(404).json({ msg: "Course not Found" });
    }

    courses.splice(courseIndex, 1); // Remove the course from the array
    res.status(200).json({ success: true });
};

module.exports = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
};