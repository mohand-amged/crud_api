# Express Courses API

A simple REST API for managing courses using Express.js with in-memory data storage.

## Features

- CRUD operations for courses
- Request validation
- RESTful endpoints

## Technologies

- Node.js
- Express.js
- express-validator


## API Endpoints
- GET	/api/courses	Get all courses
- GET	/api/courses/:id	Get single course by ID
- POST	/api/courses	Create new course
- PATCH	/api/courses/:courseId	Update course by ID
- DELETE	/api/courses/:courseId	Delete course by ID

## What I Learned 🚀

### 1.Core Concepts:

- Built a RESTful API using Express.js with full CRUD operations
- Implemented route parameter handling (:id vs :courseId)
- Used middleware for JSON parsing and request validation
- Practiced separation of concerns (routes, controllers, data layer)

### 2.Validation & Error Handling:

- Created validation schemas with express-validator
- Handled edge cases (non-existent resources, invalid IDs)
- Returned appropriate HTTP status codes (404, 400, 201)
- Structured error responses for client clarity

### 3.Key Challenges Overcome:

- Parameter consistency between routes and controllers
- Proper array manipulation (findIndex, splice, push)
- Spread operator usage for object merging
- Validation middleware integration
- Response formatting best practices

### 4.Areas for Improvement:

- Adding database integration (MongoDB/PostgreSQL)
- Implementing authentication/authorization
- Adding proper error logging
- Writing unit tests
- Implementing proper pagination

## Important Notes
- Data is stored in-memory
- Server restart clears data
