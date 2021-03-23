import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

// Local Dependencies
import { Task, TasksResponse } from './types';

// Define a service using a base URL and expected endpoints
export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/tasks' }),
  entityTypes: ['Task'],
  endpoints: (builder) => ({
    /**
     * fetch all tasks for an author
     */
    fetchTasksForUser: builder.query<
      TasksResponse,
      { limit: number; offset: number; authorId: string }
    >({
      query: ({ limit = 10, offset = 0, authorId = '' }) => {
        return {
          url: `/`,
          // body: { authorId },
          params: { limit, offset, authorId },
        };
      },
      provides: (result) => [
        ...result.results.map(({ id }) => ({ type: 'Task', id } as const)),
        { type: 'Task', id: 'LIST' },
      ],
    }),
    /**
     * Fetch single task by id
     */
    fetchTask: builder.query({
      query: ({ taskId }: { taskId: string }) => `/${taskId}`,
    }),
    /**
     * Create new task
     */
    createTask: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: `/`,
        method: 'POST',
        body,
      }),
      invalidates: [{ type: 'Task', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchTasksForUserQuery,
  useFetchTaskQuery,
  useCreateTaskMutation,
} = tasksApi;
