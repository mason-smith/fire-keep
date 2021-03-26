// @elastic/eui dependencies
import { EuiCard } from '@elastic/eui';

// Local Dependencies
import { truncate } from 'src/util/truncate';
import { TaskItemProps } from './types';
import { CardFooterContent } from './CardFooterContent';

export const TaskItem = (props: TaskItemProps) => {
  const { task } = props;
  return (
    <EuiCard
      textAlign="left"
      title={task.title}
      description={truncate(task.description)}
      footer={<CardFooterContent task={task} />}
    />
  );
};
