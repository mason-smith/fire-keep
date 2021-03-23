import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
// Components
import { TaskCreator } from './TaskCreator';
import { TaskList } from './TaskList';

const Todos = () => {
  const [user] = useAuthState(firebaseAuth);

  return (
    <>
      THIS IS THE TASKS PAGE
      <TaskCreator />
      <TaskList authorId={user?.uid} />
    </>
  );
};

export default Todos;
