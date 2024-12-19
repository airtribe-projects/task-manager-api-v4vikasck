const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('../tasks');

const app = express();
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

describe('Task Manager API', () => {
  it('should create a new task', (done) => {
    request(app)
      .post('/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
        startDate: '2023-10-01T00:00:00.000Z',
        endDate: '2023-10-10T00:00:00.000Z'
      })
      .expect(201)
      .expect((res) => {
        res.body.id = 1;
        res.body.title = 'Test Task';
        res.body.description = 'This is a test task';
        res.body.startDate = '2023-10-01T00:00:00.000Z';
        res.body.endDate = '2023-10-10T00:00:00.000Z';
      })
      .end(done);
  });

  it('should get all tasks', (done) => {
    request(app)
      .get('/tasks')
      .expect(200)
      .expect((res) => {
        res.body.length = 1;
        res.body[0].title = 'Test Task';
      })
      .end(done);
  });

  it('should get a task by ID', (done) => {
    request(app)
      .get('/tasks/1')
      .expect(200)
      .expect((res) => {
        res.body.id = 1;
        res.body.title = 'Test Task';
      })
      .end(done);
  });

  it('should update a task by ID', (done) => {
    request(app)
      .put('/tasks/1')
      .send({
        title: 'Updated Task',
        description: 'This is an updated task',
        startDate: '2023-10-05T00:00:00.000Z',
        endDate: '2023-10-15T00:00:00.000Z'
      })
      .expect(200)
      .expect((res) => {
        res.body.title = 'Updated Task';
        res.body.description = 'This is an updated task';
      })
      .end(done);
  });

  it('should update the description of a task by ID', (done) => {
    request(app)
      .patch('/tasks/1/description')
      .send({
        description: 'Updated description'
      })
      .expect(200)
      .expect((res) => {
        res.body.description = 'Updated description';
      })
      .end(done);
  });

  it('should delete a task by ID', (done) => {
    request(app)
      .delete('/tasks/1')
      .expect(204)
      .end(done);
  });
});
