// @elastic/eui dependencies
import { EuiCard } from '@elastic/eui';

// Local Dependencies
import { truncate } from 'src/util/truncate';
import { TaskListItemProps } from './types';
import { TaskListItemFooter } from './TaskListItemFooter';

export const TaskListItem = (props: TaskListItemProps) => {
  const { task } = props;
  return (
    <EuiCard
      textAlign="left"
      title={task.title}
      description={truncate(task.description)}
      footer={<TaskListItemFooter task={task} />}
    />
  );
};
