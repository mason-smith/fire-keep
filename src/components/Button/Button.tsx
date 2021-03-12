import { ButtonProps } from './types';

const Button = ({ fullWidth = false, ...props }: ButtonProps) => {
  const { children } = props;
  return (
    <button
      {...props}
      className={`${
        fullWidth ? 'w-full' : null
      } px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600`}
    >
      {children}
    </button>
  );
};

export default Button;
