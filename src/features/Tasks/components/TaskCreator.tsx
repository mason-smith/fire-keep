import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// @elastic/eui dependencies
import { EuiButton, EuiFieldText } from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { useCreateTaskMutation } from '../tasksService';
import { Task } from '../../Dashboard/types';

const initialTaskValue = { title: '', description: '' };

export const TaskCreator = () => {
  const [user] = useAuthState(firebaseAuth);
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const [task, setTask] = useState<Task>(initialTaskValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask({
      ...task,
      authorId: user?.uid,
    }).unwrap();
    // Reset form state
    setTask(initialTaskValue);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-1/3 mb-4">
      <EuiFieldText
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Task Title"
        type="text"
        id="taskTitleInput"
        aria-label="Task Title"
        fullWidth
      />
      <div className="my-2" />
      <EuiFieldText
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Task Details"
        type="text"
        id="taskDetailsInput"
        aria-label="Task Details"
        fullWidth
      />

      <div className="my-2" />
      <EuiButton type="submit" fullWidth>
        Create Task
      </EuiButton>
    </form>
  );
};
