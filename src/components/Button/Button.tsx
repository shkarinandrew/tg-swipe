import { FC } from 'react';
import { ButtonProps } from './Button.interface';

const Button: FC<ButtonProps> = ({ className = '', icon, children, ...props }) => {
  return (
    <button
      {...props}
      className={`shadow-btn bg-[#FF5069] py-3.5 px-7 rounded-2xl mt-8 text-xl font-semibold text-white flex items-center justify-center gap-4 disabled:bg-[#FFA8B4] ${className}`}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
