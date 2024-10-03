import { FC } from 'react';
import { ProgressbarProps } from './Progressbar.interface';

const Progressbar: FC<ProgressbarProps> = ({
  className = '',
  count,
  maxCount,
  ...props
}) => {
  return (
    <div {...props} className={`h-2 w-full rounded-full bg-[#FFB9C3] ${className}`}>
      <div
        className='w-full h-full rounded-full bg-[#FF5069]'
        style={{
          width: `${(count / maxCount) * 100}%`,
        }}
      />
    </div>
  );
};

export default Progressbar;
