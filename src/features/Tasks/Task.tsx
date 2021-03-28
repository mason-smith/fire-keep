import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

// @elastic/eui dependencies
import {
  EuiButton,
  EuiFieldText,
  EuiCheckbox,
  EuiSpacer,
  EuiToast,
} from '@elastic/eui';

// Local Dependencies
import { Container } from 'src/components/Container';
import {
  useFetchTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from './tasksService';
import { Task } from './types';

export const TaskPage = () => {
  const history = useHistory();
  const { id: taskId } = useParams<{ id: string }>();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  /**
   * fetch list of holidays
   * from employerHolidaySlice
   */
  const { data, isLoading } = useFetchTaskQuery({
    taskId,
  });

  const [task, setTask] = useState<Partial<Task> | null>(null);
  const [toast, setToast] = useState({
    show: false,
    color: '',
    title: '',
  });
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setTask(data);
    }
    return () => setTask(null);
  }, [data]);

  const handleUpdateTask = async () => {
    try {
      await updateTask(task as Task).unwrap();
      setToast({
        show: true,
        color: 'success',
        title: 'Successfully updated task',
      });
      setTimeout(() => {
        setToast({ show: false, color: '', title: '' });
      }, 3200);
    } catch (err) {
      setError(err);
      setToast({
        show: true,
        color: 'danger',
        title: 'Successfully updated task',
      });
      setTimeout(() => {
        setToast({ show: false, color: '', title: '' });
      }, 3200);
    }
  };

  const handleDeleteTask = async () => {
    try {
      deleteTask(task?.id || '').unwrap();
      history.push('/');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="static">
      <Container>
        <EuiFieldText
          isLoading={isLoading}
          placeholder="Task title"
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
          placeholder="Task details"
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
        <EuiButton onClick={() => handleUpdateTask()}>Save task</EuiButton>
        <EuiButton color="danger" onClick={() => handleDeleteTask()}>
          Delete task
        </EuiButton>
        <EuiSpacer size="s" />
        <pre>{JSON.stringify(error)}</pre>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {toast.show && (
          <EuiToast
            className="absolute bottom-4 right-4 max-w-xs"
            title={toast.title}
            onClose={() => {}}
            color={toast.color as any}
            iconType="check"
          />
        )}
      </Container>
    </div>
  );
};

// Double export so it can be named as a component
// or default as a page
export { TaskPage as default };
