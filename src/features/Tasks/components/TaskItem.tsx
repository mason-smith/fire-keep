// @elastic/eui dependencies
import { EuiCard, EuiCheckbox } from '@elastic/eui';

// Local Dependencies
import { truncate } from 'src/util/truncate';
import { TaskItemProps } from './types';
import { CardFooterContent } from './CardFooterContent';

import { useUpdateTaskMutation } from '../tasksService';

export const TaskItem = (props: TaskItemProps) => {
  const { task } = props;
  const [updateTask] = useUpdateTaskMutation();
  return (
    <EuiCard
      textAlign="left"
      title={task.title}
      description={truncate(task.description)}
      footer={<CardFooterContent task={task} />}
    >
      <EuiCheckbox
        className="mr-2"
        id={`task_completed_${task?.id}`}
        label="Complete"
        checked={task?.completed || false}
        onChange={(e) =>
          updateTask({
            ...task,
            completed: e.target.checked,
          })
        }
      />
    </EuiCard>
  );
};
