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
  idList: string;
  title: string;
};

export type TasksResponse = {
  results: Task[];
  total: number;
};

/**
 * Component Prop Types
 */
export type TaskListProps = {
  authorId?: string;
};
