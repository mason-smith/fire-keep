import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { TaskListItem } from './TaskListItem';
import { useFetchTasksForUserQuery } from '../tasksService';
import { selectTaskListView } from '../tasksSelectors';

export const TaskList = () => {
  // Global State
  const [user] = useAuthState(firebaseAuth);
  const view = useSelector(selectTaskListView);
  // Local State
  const [pageIndex] = useState(0);
  const [pageSize] = useState(10);

  /**
   * fetch list of tasks
   * from tasksService
   */
  const {
    data = { results: [], total: 0 },
    isLoading,
  } = useFetchTasksForUserQuery({
    limit: pageSize,
    offset: pageIndex,
    view,
    authorId: user?.uid || '',
  });
  const { results, total } = data;

  if (!results.length) {
    return (
      <p className="col-span-full text-center">
        Select the input above to create a new task
      </p>
    );
  }

  return (
    <>
      {results.map((result) => {
        return <TaskListItem key={result.id} task={result} />;
      })}
    </>
  );
};
