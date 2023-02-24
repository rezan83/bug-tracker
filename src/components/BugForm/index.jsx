import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
const BugForm = ({ bugsDataSate, setBugsDataSate }) => {
  const [newBug, setNewBug] = useState({
    id: '0',
    title: '',
    description: '',
    priority: 1,
    solved: false
  });
  const handleAddBug = event => {
    event.preventDefault();
    const id = Math.random() + '';

    setBugsDataSate([newBug, ...bugsDataSate]);
    setNewBug({
      id,
      title: '',
      description: '',
      priority: 1,
      solved: false
    });
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setNewBug({ ...newBug, [name]: value });
  };

  return (
    <Form className="w-25 p-3 m-auto" onSubmit={handleAddBug}>
        <Form.Group as={Row} >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" id="title" value={newBug.title} onChange={handleChange} required />
        </Form.Group>

        <Form.Group as={Row} >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" id="description" value={newBug.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group as={Row} >
        <Form.Label>Priority</Form.Label>
          <Form.Select defasltValue="Choose..." name="priority" id="priority" value={newBug.priority}  onChange={handleChange}>
            <option  value="1">Low</option>
            <option value="2">Normal</option>
            <option  value="3">Critical</option>
          </Form.Select>
        </Form.Group>

      {/* <label htmlFor="solved">Solved</label>
        <input
          type="checkbox"
          id="solved"
          name="solved"
          checked={newBug.solved}
          onChange={handleSolvedChange}
        /> */}
        <Button className="w-100 " variant="primary" size="sm" type="submit">add</Button>
      </Form>
  );
};

export default BugForm;
