import { useState, FormEvent, Fragment, ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import moment, { Moment } from 'moment';

// @elastic/eui dependencies
import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCheckbox,
  EuiDatePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiFormRow,
  EuiHorizontalRule,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiSuperSelect,
  EuiTextArea,
  EuiFieldText,
  EuiToolTip,
} from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from '../tasksService';
import { Task } from '../types';
import { initialTaskValue } from '../utils/initialTaskValue';
import { TaskCreatorProps } from './types';

const superSelectOptions = [
  {
    value: 'option_one',
    inputDisplay: 'Option one',
    dropdownDisplay: (
      <Fragment>
        <strong>Option one</strong>
        <EuiText size="s" color="subdued">
          <p className="euiTextColor--subdued">
            Has a short description giving more detail to the option.
          </p>
        </EuiText>
      </Fragment>
    ),
  },
  {
    value: 'option_two',
    inputDisplay: 'Option two',
    dropdownDisplay: (
      <Fragment>
        <strong>Option two</strong>
        <EuiText size="s" color="subdued">
          <p className="euiTextColor--subdued">
            Has a short description giving more detail to the option.
          </p>
        </EuiText>
      </Fragment>
    ),
  },
  {
    value: 'option_three',
    inputDisplay: 'Option three',
    dropdownDisplay: (
      <Fragment>
        <strong>Option three</strong>
        <EuiText size="s" color="subdued">
          <p className="euiTextColor--subdued">
            Has a short description giving more detail to the option.
          </p>
        </EuiText>
      </Fragment>
    ),
  },
];

export const TaskCreator = (props: TaskCreatorProps) => {
  const { task: selectedTask } = props;
  // Global utils
  const history = useHistory();
  const [user] = useAuthState(firebaseAuth);

  // tasksService utils
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  // Local Task state
  const [task, setTask] = useState<Partial<Task>>(initialTaskValue);
  const [error, setError] = useState<string[] | null>(null);
  // Flyout state
  const [hasFocus, setHasFocus] = useState(false);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [superSelectvalue, setSuperSelectValue] = useState('option_one');

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
    setHasFocus(false);
    history.push('/tasks');
  };

  const openFlyout = () => {
    setIsFlyoutVisible(true);
    setHasFocus(true);
  };

  useEffect(() => {
    if (selectedTask?.id) {
      setTask(selectedTask);
      openFlyout();
    }
    return () => {
      setTask(initialTaskValue);
    };
  }, [selectedTask]);

  const onSuperSelectChange = (value: any) => {
    setSuperSelectValue(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (selectedTask?.id) {
      await updateTask(task as Task).unwrap();
    } else {
      // Post task to the database
      await addTask({
        ...task,
        authorId: user?.uid,
      }).unwrap();
    }

    // Reset form state
    closeFlyout();
    setTask(initialTaskValue);
  };

  const handleToggleComplete = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      completed: e.target.checked,
      dateComplete: e.target.checked ? new Date().toISOString() : null,
    });
  };

  const handleChangeDate = (date: Moment, key: string) => {
    setTask({
      ...task,
      [key]: date.toISOString(),
      completed: key === 'dateComplete',
    });
  };

  const handleDeleteTask = async () => {
    try {
      deleteTask(task?.id || '').unwrap();
      history.push('/');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <EuiFieldText
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        onFocus={openFlyout}
        placeholder="New task title"
        type="text"
        id="taskTitleInput"
        aria-label="Task title"
        fullWidth
      />

      {isFlyoutVisible && (
        <EuiFlyout
          ownFocus
          onClose={closeFlyout}
          hideCloseButton
          aria-labelledby="create-task-flyout-title"
          size="s"
        >
          <EuiFlyoutHeader hasBorder>
            <EuiTitle size="m">
              <h2 id="create-task-flyout-title">Create a new task</h2>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText size="xs" color="subdued">
              <p>
                To create a task, enter a title and click the 'Save' button. All
                other fields are optional and can be filled out at a later time.
                If ever.
              </p>
            </EuiText>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiFieldText
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              placeholder="Task title"
              type="text"
              id="taskTitleInput"
              aria-label="Task title"
              fullWidth
              autoFocus={hasFocus || false}
              required
            />
            <EuiSpacer size="m" />
            <EuiTextArea
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              placeholder="Task details"
              id="taskDetailsInput"
              aria-label="Task details"
              fullWidth
            />

            <EuiHorizontalRule />
            {/* completed toggle and category select */}
            <EuiFlexGroup alignItems="center">
              <EuiFlexItem>
                <EuiCheckbox
                  id={`task_completed_${task.title}_checkbox`}
                  label="Completed"
                  checked={task.completed}
                  onChange={(e) => handleToggleComplete(e)}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow label="Select a category">
                  <EuiSuperSelect
                    options={superSelectOptions}
                    valueOfSelected={superSelectvalue}
                    onChange={(value) => onSuperSelectChange(value)}
                    itemLayoutAlign="top"
                    hasDividers
                    fullWidth
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            {/* dateStart and dateComplete selects */}
            <EuiFormRow label="Select a start date" fullWidth>
              <EuiDatePicker
                selected={task.dateStart ? moment(task.dateStart) : null}
                onChange={(date) =>
                  handleChangeDate(date as Moment, 'dateStart')
                }
                maxDate={moment(task.dateComplete)}
                fullWidth
              />
            </EuiFormRow>
            <EuiFormRow
              label="Select an end date (if the task is complete)"
              helpText="To nullify the end date, uncheck the completed checkbox"
              fullWidth
            >
              <EuiDatePicker
                selected={task.dateComplete ? moment(task.dateComplete) : null}
                onChange={(date) =>
                  handleChangeDate(date as Moment, 'dateComplete')
                }
                minDate={task.dateStart ? moment(task.dateStart) : undefined}
                fullWidth
              />
            </EuiFormRow>
            {/* due date and dueReminder selects */}
            <EuiFormRow label="Select a due date" fullWidth>
              <EuiDatePicker
                selected={task.due ? moment(task.due) : null}
                onChange={(date) => handleChangeDate(date as Moment, 'due')}
                showTimeSelect
                fullWidth
              />
            </EuiFormRow>
            <EuiFormRow label="Set a reminder" fullWidth>
              <EuiDatePicker
                selected={task.dueReminder ? moment(task.dueReminder) : null}
                onChange={(date) =>
                  handleChangeDate(date as Moment, 'dueReminder')
                }
                maxDate={moment(task.due)}
                showTimeSelect
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />
          </EuiFlyoutBody>

          <EuiFlyoutFooter className="flex items-center justify-between">
            <EuiButtonEmpty
              iconType="cross"
              onClick={closeFlyout}
              flush="left"
              type="button"
              size="s"
            >
              Close
            </EuiButtonEmpty>

            {selectedTask?.id ? (
              <>
                <EuiButtonEmpty
                  iconType="trash"
                  flush="left"
                  type="button"
                  size="s"
                  color="danger"
                  onClick={handleDeleteTask}
                >
                  Delete
                </EuiButtonEmpty>
                <EuiButtonEmpty
                  iconType="refresh"
                  flush="left"
                  type="submit"
                  size="s"
                  color="success"
                >
                  Update
                </EuiButtonEmpty>
              </>
            ) : (
              <EuiButtonEmpty
                iconType="save"
                flush="left"
                type="submit"
                size="s"
                color="success"
              >
                Save
              </EuiButtonEmpty>
            )}
          </EuiFlyoutFooter>
        </EuiFlyout>
      )}
    </form>
  );
};
