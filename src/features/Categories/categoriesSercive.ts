import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

// Local Dependencies
import { Category, CategoriesResponse } from './types';

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8082/categories' }),
  entityTypes: ['Category'],
  endpoints: (builder) => ({
    /**
     * fetch all categories for an author
     */
    fetchCategoriesForUser: builder.query<
      CategoriesResponse,
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
        ...result.results.map(({ id }) => ({ type: 'Category', id } as const)),
        { type: 'Category', id: 'LIST' },
      ],
    }),
    /**
     * Fetch single category by id
     */
    fetchCategory: builder.query({
      query: ({ categoryId }: { categoryId: string }) => `/${categoryId}`,
    }),
    /**
     * Create new category
     */
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({
        url: `/`,
        method: 'POST',
        body,
      }),
      invalidates: [{ type: 'Category', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchCategoriesForUserQuery,
  useFetchCategoryQuery,
  useCreateCategoryMutation,
} = categoriesApi;
