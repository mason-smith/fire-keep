import cuid from 'cuid';
import { FormEvent, useState } from 'react';

// @elastic/eui dependencies
import { EuiButton, EuiFieldText } from '@elastic/eui';

// Local Dependencies
import { Todo } from '../Dashboard/types';

const initialTodoValue = { title: '', details: '' };

const Todos = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>(initialTodoValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const createdTodo = {
      ...todo,
      id: cuid(),
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };
    setTodoList([...todoList, createdTodo]);
    // Reset form state
    setTodo(initialTodoValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-1/3 mb-4">
        <EuiFieldText
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="Todo Title"
          type="text"
          id="todoTitleInput"
          aria-label="Todo Title"
          fullWidth
        />
        <div className="my-2" />
        <EuiFieldText
          value={todo.details}
          onChange={(e) => setTodo({ ...todo, details: e.target.value })}
          placeholder="Todo Details"
          type="text"
          id="todoDetailsInput"
          aria-label="Todo Details"
          fullWidth
        />

        <div className="my-2" />
        <EuiButton type="submit" fullWidth>
          Create Todo
        </EuiButton>
      </form>
      <section className="w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todoList.map((todo) => {
            return (
              <div
                key={todo.id}
                className=" min-w-full max-w-2xl px-8 py-4 mb-4 mx-auto bg-white rounded-lg shadow hover:shadow-md dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {todo.createdDate}
                  </span>
                  <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                    Category
                  </a>
                </div>

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                  >
                    {todo.title}
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {todo.details}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read more
                  </a>

                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                      alt="avatar"
                    />
                    <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                      User Name
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Todos;
