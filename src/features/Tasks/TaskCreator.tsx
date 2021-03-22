import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import cuid from 'cuid';

// @elastic/eui dependencies
import { EuiButton, EuiFieldText } from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { useCreateTaskMutation } from './tasksService';
import { Todo } from '../Dashboard/types';

const initialTodoValue = { title: '', details: '' };

export const TaskCreator = ({ todoList, setTodoList }: any) => {
  const [user] = useAuthState(firebaseAuth);
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const [todo, setTodo] = useState<Todo>(initialTodoValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const createdTodo = {
      ...todo,
      id: cuid(),
      authorId: user?.uid,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };
    setTodoList([...todoList, createdTodo]);
    addTask({
      ...todo,
      id: cuid(),
      authorId: user?.uid,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    }).unwrap();
    // Reset form state
    setTodo(initialTodoValue);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-1/3 mb-4">
      <EuiFieldText
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="Todo Title"
        type="text"
        id="todoTitleInput"
        aria-label="Todo Title"
        fullWidth
      />
      <div className="my-2" />
      <EuiFieldText
        value={todo.details}
        onChange={(e) => setTodo({ ...todo, details: e.target.value })}
        placeholder="Todo Details"
        type="text"
        id="todoDetailsInput"
        aria-label="Todo Details"
        fullWidth
      />

      <div className="my-2" />
      <EuiButton type="submit" fullWidth>
        Create Todo
      </EuiButton>
    </form>
  );
};
