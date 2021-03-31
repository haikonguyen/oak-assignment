import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { TaskListProps } from '../../types';

export const TaskList: FC<TaskListProps> = (props) => {
  const { foundationTasks } = props;

  return (
    <>
      {foundationTasks?.map((task) => (
        <Form.Check
          key={task.id}
          type="checkbox"
          label={task.name}
          checked={task.done}
        />
      ))}
    </>
  );
};
