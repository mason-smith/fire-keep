import { Link } from 'react-router-dom';

// @elastic/eui dependencies
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiToolTip,
  EuiButtonIcon,
} from '@elastic/eui';

// Local Dependencies
import { TaskItemProps } from './types';

export const CardFooterContent = ({ task }: TaskItemProps) => {
  return (
    <EuiFlexGroup justifyContent="spaceBetween">
      <EuiFlexItem grow={false}>
        <EuiToolTip position="top" content="Delete task">
          <EuiButtonIcon
            size="s"
            color="danger"
            iconType="trash"
            onClick={() => deleteTask(task?.id || '').unwrap()}
            aria-label="Delete"
          />
        </EuiToolTip>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Link to={`tasks/${task.id}`}>
          <EuiButton size="s">View task</EuiButton>
        </Link>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
