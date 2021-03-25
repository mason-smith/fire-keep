import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
// Components
import { TaskCreator } from 'src/features/Tasks/components/TaskCreator';
import { TaskList } from 'src/features/Tasks/components/TaskList';

// Local Dependencies
import Container from 'src/components/Container';

const Dashboard = () => {
  const [user] = useAuthState(firebaseAuth);
  return (
    <Container>
      <div className="flex flex-col mt-4 items-center w-full min-h-screen">
        <TaskCreator />
        <TaskList authorId={user?.uid} />
      </div>
    </Container>
  );
};

export default Dashboard;
