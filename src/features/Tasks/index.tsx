// @elastic/eui dependencies
import { EuiSpacer } from '@elastic/eui';
import { useParams } from 'react-router';

// Local Dependencies
// Components
import { Container } from 'src/components/Container';
import { TaskCreator } from 'src/features/Tasks/components/TaskCreator';
import { TaskList } from 'src/features/Tasks/components/TaskList';
import { TaskStatusViewSelect } from './components/TaskStatusViewSelect';
import { useFetchTaskQuery } from './tasksService';
import { Task } from './types';
import { initialTaskValue } from './utils/initialTaskValue';

const TasksPage = () => {
  const { taskId = '' } = useParams<{ taskId: string }>();
  // Local State

  const { data, isLoading } = taskId
    ? useFetchTaskQuery({
        taskId,
      })
    : { data: initialTaskValue, isLoading: false };

  return (
    <Container>
      <div className="flex flex-col items-center w-full min-h-screen">
        <div className="w-full md:w-2/3 lg:w-1/3">
          <TaskCreator task={data} />
        </div>

        <EuiSpacer size="s" />
        <div className="w-full md:w-2/3 lg:w-1/3">
          <TaskStatusViewSelect />
        </div>
        <EuiSpacer size="s" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <TaskList />
        </div>
      </div>
    </Container>
  );
};

export default TasksPage;
