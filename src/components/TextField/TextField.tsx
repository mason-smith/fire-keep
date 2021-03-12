import { TextFieldProps } from './types';

const TextField = (props: TextFieldProps) => {
  const { id, label } = props;
  return (
    <>
      {label ? (
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <input
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        {...props}
      />
    </>
  );
};

export default TextField;
