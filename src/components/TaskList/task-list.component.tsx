import React, { FC, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { TaskListProps, TaskProps } from '../../types';

export const TaskList: FC<TaskListProps> = (props) => {
  const { tasks, setTasks } = props;

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

      // @ts-ignore
      tasks.map((checkedTask) => {
        if (checkedTask.done === true) {
          console.log('done');
        }

        return checkedTask;
      });
    },
    [setTasks, tasks]
  );

  return (
    <>
      {tasks?.map((task) => (
        <Form.Check
          key={task.id}
          type="checkbox"
          label={task.name}
          checked={task.done}
          onChange={() => checkboxChangeHandler(task)}
        />
      ))}
    </>
  );
};
