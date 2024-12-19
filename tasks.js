const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();
let tasks = [];

// Get all tasks
router.get('/', (req, res, next) => {
  if(tasks.length === 0) {
    const err = new Error('Task not found');
    err.status = 404;
    return next(err);
  }
  else{
    res.json(tasks);
  }
});

// Get a task by ID
router.get('/:id', (req, res, next) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    const err = new Error('Task not found');
    err.status = 404;
    return next(err);
  }
  res.json(task);
});

// Create a new task
router.post(
  '/',
  body('title').isString().notEmpty(),
  body('description').isString().optional(),
  body('startDate').isISO8601().toDate(),
  body('endDate').isISO8601().toDate(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description || '',
      startDate: req.body.startDate,
      endDate: req.body.endDate
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  }
);

// Update a task by ID
router.put(
  '/:id',
  body('title').isString().notEmpty(),
  body('description').isString().optional(),
  body('startDate').isISO8601().toDate(),
  body('endDate').isISO8601().toDate(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
      const err = new Error('Task not found');
      err.status = 404;
      return next(err);
    }
    task.title = req.body.title;
    task.description = req.body.description || '';
    task.startDate = req.body.startDate;
    task.endDate = req.body.endDate;
    res.json(task);
  }
);

// Update the description of a task by ID
router.patch(
  '/:id/description',
  body('description').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
      const err = new Error('Task not found');
      err.status = 404;
      return next(err);
    }
    task.description = req.body.description;
    res.json(task);
  }
);

// Delete a task by ID
router.delete('/:id', (req, res, next) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    const err = new Error('Task not found');
    err.status = 404;
    return next(err);
  }
  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

module.exports = router;