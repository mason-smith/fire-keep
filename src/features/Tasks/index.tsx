import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
// Components
import { TaskCreator } from './TaskCreator';
import { TaskList } from './TaskList';
// Types
import { Todo } from '../Dashboard/types';

const Todos = () => {
  const [user] = useAuthState(firebaseAuth);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <>
      <TaskCreator todoList={todoList} setTodoList={setTodoList} />
      <TaskList authorId={user?.uid} />
    </>
  );
};

export default Todos;
