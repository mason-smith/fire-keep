export type Task = {
  id: string;
  authorId: string;
  completed: boolean;
  dateCreated: string;
  dateComplete: string | null;
  dateStart: string | null;
  dateUpdated: string;
  description: string;
  due: string | null;
  dueReminder: boolean | null;
  idCategory: string;
  title: string;
};

export type TasksResponse = {
  results: Task[];
  total: number;
};

export type TaskListViewType = 'all' | 'active' | 'completed';

export type TasksState = {
  view: TaskListViewType;
};
