import { useState, FormEvent, Fragment, ChangeEvent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import moment, { Moment } from 'moment';

// @elastic/eui dependencies
import {
  EuiButton,
  EuiButtonEmpty,
  EuiCheckbox,
  EuiDatePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiFormRow,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiSuperSelect,
  EuiFieldText,
  EuiTextArea,
} from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { useCreateTaskMutation } from '../tasksService';
import { Task } from '../types';
import { initialTaskValue } from '../utils/initialTaskValue';

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

export const TaskCreator = () => {
  // Task state
  const [user] = useAuthState(firebaseAuth);
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const [task, setTask] = useState<Partial<Task>>(initialTaskValue);
  // Flyout state
  const [hasFocus, setHasFocus] = useState(false);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [superSelectvalue, setSuperSelectValue] = useState('option_one');
  const [dateStart, setDateStart] = useState(moment());

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
    setHasFocus(false);
  };

  const openFlyout = () => {
    setIsFlyoutVisible(true);
    setHasFocus(true);
  };

  const onSuperSelectChange = (value: any) => {
    setSuperSelectValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Post task to the database
    addTask({
      ...task,
      authorId: user?.uid,
    }).unwrap();

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
    setDateStart(date as Moment);
    setTask({
      ...task,
      [key]: date.toISOString(),
      completed: key === 'dateComplete',
    });
  };

  console.log('task :>> ', task);

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-1/3">
      {/* <EuiButton onClick={showFlyout} onFocus={showFlyout}>Show flyout</EuiButton> */}
      <EuiFieldText
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        onFocus={openFlyout}
        placeholder="Task title"
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
        >
          <EuiFlyoutHeader hasBorder>
            <EuiTitle size="m">
              <h2 id="create-task-flyout-title">Create a new task</h2>
            </EuiTitle>
            <EuiSpacer size="s" />
            <EuiText color="subdued">
              <p>
                To create a task, add either a title or details and click the
                'Save' button. All other fields are optional and can be filled
                out at a later time. If ever.
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
            <EuiSpacer size="m" />

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
            <EuiSpacer size="m" />
            <EuiFlexGroup alignItems="center">
              <EuiFlexItem>
                <EuiFormRow label="Select a start date">
                  <EuiDatePicker
                    selected={task.dateStart ? moment(task.dateStart) : null}
                    onChange={(date) =>
                      handleChangeDate(date as Moment, 'dateStart')
                    }
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow
                  label="Select an end date (if the task is complete)"
                  helpText="To nullify the end date, uncheck the completed checkbox"
                >
                  <EuiDatePicker
                    selected={
                      task.dateComplete ? moment(task.dateComplete) : null
                    }
                    onChange={(date) =>
                      handleChangeDate(date as Moment, 'dateComplete')
                    }
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer />
          </EuiFlyoutBody>

          <EuiFlyoutFooter>
            <EuiFlexGroup justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  iconType="cross"
                  onClick={closeFlyout}
                  flush="left"
                  type="button"
                >
                  Close
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton type="submit">Save</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlyoutFooter>
        </EuiFlyout>
      )}
    </form>
  );
};
