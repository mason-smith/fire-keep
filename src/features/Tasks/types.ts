export type Task = {
  id: string;
  authorId: string;
  createdDate: string;
  updatedDate: string;
  title: string;
  details: string;
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
