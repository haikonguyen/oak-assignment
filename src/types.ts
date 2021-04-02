import { Dispatch, SetStateAction } from 'react';

export interface TaskProps {
  id: number | null;
  name: string | null;
  done: boolean | undefined;
}

export interface TaskListProps {
  tasks: TaskProps[];
  onChange?: () => void;
  setTasks: (value: TaskProps[]) => void;
  setIsPhaseDone: Dispatch<SetStateAction<boolean>>;
}
