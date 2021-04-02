import React, { FC, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { IoTrashBinOutline } from 'react-icons/all';
import { TaskListProps, TaskProps } from '../../types';

export const TaskList: FC<TaskListProps> = (props) => {
  const { tasks, setTasks, setIsPhaseDone } = props;

  const checkboxChangeHandler = useCallback(
    (task: TaskProps) => {
      setTasks(
        tasks.map((checkedTask) => {
          if (checkedTask.id === task.id) {
            return { ...checkedTask, done: !checkedTask.done };
          }

          return checkedTask;
        })
      );
    },
    [setTasks, tasks]
  );

  const deleteHandler = useCallback(
    (task: TaskProps) => {
      setTasks(tasks.filter((deletedTask) => deletedTask.id !== task.id));
    },
    [setTasks, tasks]
  );

  if (tasks.every((checkedTask) => checkedTask.done)) {
    setIsPhaseDone(true);
  } else {
    setIsPhaseDone(false);
  }

  return (
    <>
      {tasks?.map((task) => (
        <section
          key={uuidv4()}
          className="d-flex align-items-center justify-content-between"
        >
          <Form.Check
            type="checkbox"
            label={task.name}
            checked={task.done}
            onChange={() => checkboxChangeHandler(task)}
            className="mt-3"
          />
          <IoTrashBinOutline
            style={{ cursor: 'pointer' }}
            onClick={() => deleteHandler(task)}
          />
        </section>
      ))}
    </>
  );
};
