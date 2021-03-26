import { Link } from 'react-router-dom';

// @elastic/eui dependencies
import {
  EuiButton,
  EuiCheckbox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiToolTip,
  EuiButtonIcon,
} from '@elastic/eui';

// Local Dependencies
import { TaskItemProps } from './types';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../tasksService';

export const TaskItemFooter = ({ task }: TaskItemProps) => {
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <EuiFlexGroup justifyContent="spaceBetween">
      <EuiFlexItem
        grow={false}
        className="flex w-full flex-row items-center justify-start"
      >
        <EuiToolTip position="top" content="Delete task">
          <EuiButtonIcon
            size="s"
            color="danger"
            iconType="trash"
            onClick={() => deleteTask(task?.id || '').unwrap()}
            aria-label="Delete"
          />
        </EuiToolTip>
        <EuiCheckbox
          className="ml-6"
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
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Link to={`tasks/${task.id}`}>
          <EuiButton size="s">View task</EuiButton>
        </Link>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
