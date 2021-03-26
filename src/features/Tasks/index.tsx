// @elastic/eui dependencies
import { EuiSpacer } from '@elastic/eui';

// Local Dependencies
// Components
import Container from 'src/components/Container';
import { TaskCreator } from 'src/features/Tasks/components/TaskCreator';
import { TaskList } from 'src/features/Tasks/components/TaskList';
import { TaskStatusViewSelect } from './components/TaskStatusViewSelect';

const TasksPage = () => {
  // Local State
  return (
    <Container>
      <div className="flex flex-col mt-4 items-center w-full min-h-screen">
        <TaskCreator />
        <EuiSpacer size="s" />
        <div className="w-full md:w-1/3">
          <TaskStatusViewSelect />
        </div>
        <EuiSpacer size="s" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TaskList />
        </div>
      </div>
    </Container>
  );
};

export default TasksPage;
