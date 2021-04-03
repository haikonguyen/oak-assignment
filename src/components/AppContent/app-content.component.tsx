import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaCheck } from 'react-icons/all';
import { Circle } from '../Circle/circle.component';
import { TaskList } from '../TaskList/task-list.component';
import { TaskProps } from '../../types';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MessageBox } from '../Modal/modal.component';

export const AppContent: FC = () => {
  const [foundationTasks, setFoundationTasks] = useLocalStorage<TaskProps[]>(
    'foundationTasks',
    [
      { id: 1, name: 'Setup virtual space', done: false },
      { id: 2, name: 'Set mission & vision', done: false },
      { id: 3, name: 'Select business name', done: false },
      { id: 4, name: 'Buy domains', done: false },
    ]
  );
  const [discoveryTasks, setDiscoveryTasks] = useLocalStorage<TaskProps[]>(
    'discoveryTasks',
    [
      { id: 1, name: 'Create roadmap', done: false },
      { id: 2, name: 'Competitor analysis', done: false },
    ]
  );
  const [deliveryTasks, setDeliveryTasks] = useLocalStorage<TaskProps[]>(
    'deliveryTasks',
    [
      { id: 1, name: 'Release marketing website', done: false },
      { id: 2, name: 'Release MVP', done: false },
    ]
  );
  const [todoText, setTodoText] = useState('');
  const [isFoundationPhaseDone, setIsFoundationPhaseDone] = useState(false);
  const [isDiscoveryPhaseDone, setIsDiscoveryPhaseDone] = useState(false);
  const [isDeliveryPhaseDone, setIsDeliveryPhaseDone] = useState(false);
  const [showMsgBox, setShowMsgBox] = useState(false);
  const [todoPhase, setTodoPhase] = useState('');
  const [completeMsg, setCompleteMsg] = useState('');
  const [validationText, setValidationText] = useState(false);

  useEffect(() => {
    if (isFoundationPhaseDone && isDiscoveryPhaseDone && isDeliveryPhaseDone) {
      fetch('https://uselessfacts.jsph.pl/random.json')
        .then((response) => response.json())
        .then((data) => setCompleteMsg(data.text))
        .then(() => setShowMsgBox(true));
    }
  }, [isDeliveryPhaseDone, isDiscoveryPhaseDone, isFoundationPhaseDone]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    switch (todoPhase) {
      case 'foundation': {
        setFoundationTasks([
          ...foundationTasks,
          {
            id: foundationTasks.length + 1,
            name: todoText,
            done: false,
          },
        ]);
        setTodoText('');
        break;
      }

      case 'discovery': {
        setDiscoveryTasks([
          ...discoveryTasks,
          {
            id: foundationTasks.length + 1,
            name: todoText,
            done: false,
          },
        ]);
        setTodoText('');
        break;
      }

      case 'delivery': {
        setDeliveryTasks([
          ...deliveryTasks,
          {
            id: foundationTasks.length + 1,
            name: todoText,
            done: false,
          },
        ]);
        setTodoText('');
        break;
      }

      default: {
        setValidationText(true);
      }
    }
  };

  const handlePhaseSwitch = (e: FormEvent) => {
    e.persist();
    setValidationText(false);
    const target = e.target as HTMLTextAreaElement;
    setTodoPhase(target.value);
  };

  return (
    <>
      <MessageBox
        show={showMsgBox}
        completeMsg={completeMsg}
        onHide={() => setShowMsgBox(false)}
      />
      <Form
        style={{ background: 'white', padding: '2rem' }}
        onSubmit={submitHandler}
      >
        <h1>My startup progress</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="font-weight-bold">
            Choose Task Phase:
          </Form.Label>
          <div className="alert-danger">
            {validationText && 'Please choose Task Phase'}
          </div>
          <Form.Check
            value="foundation"
            type="radio"
            label="Foundation"
            onChange={handlePhaseSwitch}
            checked={todoPhase === 'foundation'}
          />
          <Form.Check
            value="discovery"
            type="radio"
            label="Discovery"
            onChange={handlePhaseSwitch}
            checked={todoPhase === 'discovery'}
          />
          <Form.Check
            value="delivery"
            type="radio"
            label="Delivery"
            onChange={handlePhaseSwitch}
            checked={todoPhase === 'delivery'}
          />
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
              value={todoText}
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
            {isFoundationPhaseDone && <FaCheck size="30px" />}
          </div>
          <TaskList
            tasks={foundationTasks}
            setTasks={setFoundationTasks}
            setIsPhaseDone={setIsFoundationPhaseDone}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <div className="d-flex flex-wrap align-content-center">
            <Circle className="align-self-center mr-3">2</Circle>
            <h2 className="align-self-end mr-3 mb-0">Discovery</h2>
            {isDiscoveryPhaseDone && <FaCheck size="30px" />}
          </div>
          <TaskList
            tasks={discoveryTasks}
            setTasks={setDiscoveryTasks}
            setIsPhaseDone={setIsDiscoveryPhaseDone}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <div className="d-flex flex-wrap align-content-center">
            <Circle className="align-self-center mr-3">3</Circle>
            <h2 className="align-self-end mr-3 mb-0">Delivery</h2>
            {isDeliveryPhaseDone && <FaCheck size="30px" />}
          </div>
          <TaskList
            tasks={deliveryTasks}
            setTasks={setDeliveryTasks}
            setIsPhaseDone={setIsDeliveryPhaseDone}
          />
        </Form.Group>
      </Form>
    </>
  );
};
