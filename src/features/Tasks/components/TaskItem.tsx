// @elastic/eui dependencies
import { EuiCard } from '@elastic/eui';

// Local Dependencies
import { truncate } from 'src/util/truncate';
import { TaskItemProps } from './types';
import { TaskItemFooter } from './TaskItemFooter';

export const TaskItem = (props: TaskItemProps) => {
  const { task } = props;
  return (
    <EuiCard
      textAlign="left"
      title={task.title}
      description={truncate(task.description)}
      footer={<TaskItemFooter task={task} />}
    />
  );
};
