export interface TaskProps {
  id: number | null;
  name: string | null;
  done: boolean | undefined;
}

export interface TaskListProps {
  foundationTasks: TaskProps[] | null;
}
