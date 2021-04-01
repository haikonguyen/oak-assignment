import React, { FC, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaCheck } from 'react-icons/all';
import { Circle } from '../Circle/circle.component';
import { TaskList } from '../TaskList/task-list.component';
import { TaskProps } from '../../types';

export const AppContent: FC = () => {
  const [foundationTasks, setFoundationTasks] = useState<TaskProps[]>([]);
  const [discoveryTasks, setDiscoveryTasks] = useState<TaskProps[]>([]);
  const [deliveryTasks, setDeliveryTasks] = useState<TaskProps[]>([]);
  const [todoText, setTodoText] = useState('');
  const [isPhaseDone, setIsPhaseDone] = useState(false);
  const [todoPhase, setTodoPhase] = useState('');
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFoundationTasks([
      ...foundationTasks,
      { id: foundationTasks.length + 1, name: todoText, done: false },
    ]);
  };
  return (
    <Form
      style={{ background: 'white', padding: '2rem' }}
      onSubmit={submitHandler}
    >
      <h1>My startup progress</h1>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className="font-weight-bold">Choose Task Phase:</Form.Label>
        <Form.Check
          name="todoPhase"
          type="radio"
          label="Foundation"
          value="foundation"
        />
        <Form.Check name="todoPhase" type="radio" label="Discovery" />
        <Form.Check name="todoPhase" type="radio" label="Delivery" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className="font-weight-bold">
          Enter new task here:
        </Form.Label>
        <section className="d-flex align-content-center justify-content-center">
          <Form.Control
            type="text"
            placeholder="Enter new task"
            onChange={(event) => setTodoText(event.target.value)}
            className="mr-3"
          />
          <Button variant="primary" type="submit">
            New
          </Button>
        </section>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <div className="d-flex flex-wrap align-content-center">
          <Circle className="align-self-center mr-3">1</Circle>
          <h2 className="align-self-end mr-3 mb-0">Foundation</h2>
          {isPhaseDone && <FaCheck size="30px" />}
        </div>
        <TaskList
          tasks={foundationTasks}
          setTasks={setFoundationTasks}
          setIsPhaseDone={setIsPhaseDone}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <div className="d-flex flex-wrap align-content-center">
          <Circle className="align-self-center mr-3">2</Circle>
          <h2 className="align-self-end mr-3 mb-0">Discovery</h2>
          {isPhaseDone && <FaCheck size="30px" />}
        </div>
        <TaskList
          tasks={discoveryTasks}
          setTasks={setDiscoveryTasks}
          setIsPhaseDone={setIsPhaseDone}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <div className="d-flex flex-wrap align-content-center">
          <Circle className="align-self-center mr-3">3</Circle>
          <h2 className="align-self-end mr-3 mb-0">Delivery</h2>
          {isPhaseDone && <FaCheck size="30px" />}
        </div>
        <TaskList
          tasks={deliveryTasks}
          setTasks={setDeliveryTasks}
          setIsPhaseDone={setIsPhaseDone}
        />
      </Form.Group>
    </Form>
  );
};
