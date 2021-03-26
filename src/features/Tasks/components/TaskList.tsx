import { useState } from 'react';
import { Link } from 'react-router-dom';

// Local Dependencies
import { useFetchTasksForUserQuery } from '../tasksService';
import { TaskListProps } from '../types';
import { TaskListItem } from './TaskListItem';

export const TaskList = (props: TaskListProps) => {
  const { authorId = '' } = props;
  // Local State
  const [pageIndex] = useState(0);
  const [pageSize] = useState(10);

  /**
   * fetch list of holidays
   * from employerHolidaySlice
   */
  const {
    data = { results: [], total: 0 },
    isLoading,
  } = useFetchTasksForUserQuery({
    limit: pageSize,
    offset: pageIndex,
    authorId,
  });

  const { results, total } = data;

  if (!results.length) {
    return <p className="col-span-full text-center">Create your first task</p>;
  }

  return (
    <>
      {results.map((result) => {
        return <TaskListItem key={result.id} task={result} />;
      })}
    </>
  );
};
