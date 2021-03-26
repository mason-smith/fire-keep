import { useDispatch, useSelector } from 'react-redux';

// @elastic/eui dependencies
import { EuiButtonGroup } from '@elastic/eui';

// Local Dependencies
import { selectTaskListView } from '../tasksSelectors';
import { setTaskListViewState } from '../tasksSlice';
import { TaskListViewType } from '../types';

export const TaskStatusViewSelect = () => {
  const dispatch = useDispatch();
  const view = useSelector(selectTaskListView);

  const toggleButtons = [
    {
      id: 'all',
      label: 'All',
      value: 'all',
    },
    {
      id: 'active',
      label: 'Active',
      value: 'active',
    },
    {
      id: 'completed',
      label: 'Completed',
      value: 'completed',
    },
  ];

  return (
    <EuiButtonGroup
      legend="view all, active, or completed tasks"
      color="primary"
      options={toggleButtons}
      idSelected={view}
      onChange={(id) => dispatch(setTaskListViewState(id as TaskListViewType))}
      isFullWidth
    />
  );
};
