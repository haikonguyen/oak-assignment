import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle/global-style.component';
import { TaskList } from './components/TaskList/task-list.component';

const StyledApp = styled.div`
  height: 100vh;
  background: #dbdbdb;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: FC = () => {
  const [foundationTasks, setFoundationTasks] = useState([
    {
      id: 0,
      name: '',
      done: false,
    },
  ]);
  const [todoText, setTodoText] = useState('');

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFoundationTasks([
      ...foundationTasks,
      { id: foundationTasks.length + 1, name: todoText, done: false },
    ]);
  };

  return (
    <StyledApp>
      <GlobalStyle />
      <main>
        <Form
          style={{ background: 'white', padding: '1rem' }}
          onSubmit={submitHandler}
        >
          <h1>My startup progress</h1>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter new task here:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new task"
              value={todoText}
              onChange={(event) => setTodoText(event.target.value)}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <div className="d-flex flex-wrap align-content-center">
              <div className="align-self-center">1</div> <h2>Foundation</h2>
              <div className="align-self-center">DONE check</div>
            </div>
            <TaskList foundationTasks={foundationTasks} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <div>
              <div>2</div> <h2>Discovery</h2>
            </div>
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <div>
              <div>3</div> <h2>Delivery</h2>
            </div>
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </main>
    </StyledApp>
  );
};

export default App;
