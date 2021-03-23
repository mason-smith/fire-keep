import { useParams } from 'react-router';
import { Container } from 'src/components';

// Local Dependencies
// Components
import { useFetchTaskQuery } from './tasksService';

export const Task = () => {
  const { id: taskId } = useParams<{ id: string }>();

  console.log('taskId :>> ', taskId);

  /**
   * fetch list of holidays
   * from employerHolidaySlice
   */
  const { data, isLoading } = useFetchTaskQuery({
    taskId,
  });

  return (
    <Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
};

// Double export so it can be named as a component
// or default as a page
export { Task as default };
