import { Dispatch, SetStateAction } from 'react';

export interface TaskProps {
  id: number | null;
  name: string | null;
  done: boolean | undefined;
}

export interface TaskListProps {
  tasks: TaskProps[];
  onChange?: () => void;
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
  setIsPhaseDone: Dispatch<SetStateAction<boolean>>;
}
