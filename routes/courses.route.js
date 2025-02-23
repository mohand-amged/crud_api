// routes/courses.route.js
const express = require('express');
const router = express.Router();

const { validationSchema } = require('../middlewares/validations')
const coursesController = require('../controllers/courses.controllers');

// Define validation middleware

// Define routes (note: no `/api` prefix here)
router.get('/courses', coursesController.getAllCourses);
router.get('/courses/:id', coursesController.getCourse);
router.post('/courses', validationSchema(), coursesController.addCourse); // POST route
router.patch('/courses/:courseId', coursesController.updateCourse);
router.delete('/courses/:courseId', coursesController.deleteCourse);

module.exports = router;