import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Dependencies
import { TasksState, TaskListViewType } from './types';

const initialState: TasksState = {
  view: 'all',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTaskListViewState: (state, action: PayloadAction<TaskListViewType>) => {
      state.view = action.payload;
    },
  },
});

export const { setTaskListViewState } = tasksSlice.actions;

export default tasksSlice.reducer;
