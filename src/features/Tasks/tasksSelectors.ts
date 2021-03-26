// Local Dependencies
import type { RootState } from 'src/config/store';

export const selectTaskListView = (state: RootState) => state.tasks.view;
