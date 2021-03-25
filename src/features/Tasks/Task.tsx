import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// @elastic/eui dependencies
import { EuiButton, EuiFieldText, EuiCheckbox, EuiSpacer } from '@elastic/eui';

// Local Dependencies
import Container from 'src/components/Container';
import { useFetchTaskQuery, useUpdateTaskMutation } from './tasksService';
import { Task } from './types';

export const TaskPage = () => {
  const { id: taskId } = useParams<{ id: string }>();
  const [updateTask] = useUpdateTaskMutation();

  /**
   * fetch list of holidays
   * from employerHolidaySlice
   */
  const { data, isLoading, isError, isSuccess } = useFetchTaskQuery({
    taskId,
  });

  const [task, setTask] = useState<Partial<Task> | null>(null);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setTask(data);
    }
  }, [data]);

  useEffect(() => {
    console.log('isError :>> ', isError);
  }, [isError]);
  useEffect(() => {
    console.log('isSuccess :>> ', isSuccess);
  }, [isSuccess]);

  return (
    <Container>
      <EuiFieldText
        isLoading={isLoading}
        placeholder="Placeholder text"
        value={task?.title || ''}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value,
          })
        }
      />
      <EuiSpacer size="s" />
      <EuiFieldText
        isLoading={isLoading}
        placeholder="Placeholder text"
        value={task?.description || ''}
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value,
          })
        }
      />
      <EuiSpacer size="s" />
      <EuiCheckbox
        id={`task_completed_${task?.id}`}
        label="Completed"
        checked={task?.completed || false}
        onChange={(e) =>
          setTask({
            ...task,
            completed: e.target.checked,
          })
        }
      />
      <EuiSpacer size="s" />
      <EuiButton
        onClick={() =>
          updateTask(task as Task)
            .unwrap()
            .then((fulfilled) => console.log('fulfilled', fulfilled))
            .catch(({ data }) => setError(data.message))
        }
      >
        Update task
      </EuiButton>
      <EuiSpacer size="s" />
      <p>{error}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
};

// Double export so it can be named as a component
// or default as a page
export { TaskPage as default };
