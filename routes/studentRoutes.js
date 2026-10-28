const express = require("express");
const students = require("../data/students");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(students);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Student ID must be a number" });
  }

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.status(200).json(student);
});

router.post("/", (req, res) => {
  const { name, email, age, course } = req.body;

  if (!name || !email || age === undefined || !course) {
    return res.status(400).json({
      error: "name, email, age and course are required"
    });
  }

  if (!Number.isInteger(age) || age <= 0) {
    return res.status(400).json({
      error: "age must be a positive integer"
    });
  }

  const emailExists = students.some((student) => student.email === email);

  if (emailExists) {
    return res.status(400).json({
      error: "Email already exists"
    });
  }

  const newStudent = {
    id: students.length ? Math.max(...students.map((student) => student.id)) + 1 : 1,
    name,
    email,
    age,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent
  });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Student ID must be a number" });
  }

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, email, age, course } = req.body;

  if (!name || !email || age === undefined || !course) {
    return res.status(400).json({
      error: "name, email, age and course are required"
    });
  }

  if (!Number.isInteger(age) || age <= 0) {
    return res.status(400).json({
      error: "age must be a positive integer"
    });
  }

  const emailExists = students.some(
    (item) => item.email === email && item.id !== id
  );

  if (emailExists) {
    return res.status(400).json({
      error: "Email already exists"
    });
  }

  student.name = name;
  student.email = email;
  student.age = age;
  student.course = course;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Student ID must be a number" });
  }

  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

module.exports = router;
