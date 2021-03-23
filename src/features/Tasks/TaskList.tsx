import { useState } from 'react';
import { Link } from 'react-router-dom';

// Local Dependencies
import { useFetchTasksForUserQuery } from './tasksService';
import { TaskListProps } from './types';

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
    return <p>Create your first post</p>;
  }

  return (
    <ul>
      {results.map((result) => {
        return (
          <Link to={`tasks/${result.id}`} key={result.id}>
            <li>
              {result.title} - {result.details}{' '}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
