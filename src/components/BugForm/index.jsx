import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bugform.css';

const BugForm = ({ bugsDataSate, setBugsDataSate }) => {
  const [newBug, setNewBug] = useState({
    id: '0',
    title: '',
    description: '',
    priority: 1,
    solved: false,
    reporter: '',
    assignee: ''
  });
  const handleAddBug = event => {
    event.preventDefault();
    const id = Math.random() + '';
    if (newBug.assignee === '') {
      newBug.assignee = newBug.reporter;
    }

    setBugsDataSate([newBug, ...bugsDataSate]);
    setNewBug({
      id,
      title: '',
      description: '',
      priority: 1,
      solved: false,
      reporter: '',
      assignee: ''
    });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setNewBug({ ...newBug, [name]: value });
  };

  return (
    <Form className="bug-form p-3 m-auto" onSubmit={handleAddBug}>
      <Form.Group as={Row}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          id="title"
          value={newBug.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          id="description"
          value={newBug.description}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label>Reporter</Form.Label>
        <Form.Control
          type="text"
          name="reporter"
          id="reporter"
          value={newBug.reporter}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label>Assignee</Form.Label>
        <Form.Control
          type="text"
          name="assignee"
          id="assignee"
          value={newBug.assignee}
          placeholder="same as reporter if left empty"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label>Priority</Form.Label>
        <Form.Select name="priority" id="priority" value={newBug.priority} onChange={handleChange}>
          <option value="1">Low</option>
          <option value="2">Normal</option>
          <option value="3">Critical</option>
        </Form.Select>
      </Form.Group>

      <Button className="w-100 mt-5" variant="primary" size="sm" type="submit">
        Report
      </Button>
    </Form>
  );
};

export default BugForm;
