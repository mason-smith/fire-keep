import { Task } from '../types';

export type TaskListItemProps = {
  task: Task;
};

export type TaskCreatorProps = {
  task: Task | Partial<Task> | undefined;
};
