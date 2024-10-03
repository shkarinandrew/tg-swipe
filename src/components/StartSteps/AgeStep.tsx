import { FC, useEffect, useRef, useState } from 'react';
import AgePicker from '../AgePicker';
import { AgePickerProps } from '../AgePicker/AgePicker.interface';
import Progressbar from '../Progressbar';

const AgeStep: FC<Pick<AgePickerProps, 'onChange'>> = ({ onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (!ref.current) return;

    setHeight(ref.current.offsetHeight - 100);
  }, []);

  return (
    <div className='flex flex-col h-full items-center mt-4' ref={ref}>
      <Progressbar count={1} maxCount={3} className='!w-[180px]' />

      <div className='font-semibold text-2xl leading-tight text-center mt-4'>
        How old are you?
      </div>
      <AgePicker onChange={onChange} height={height} />
    </div>
  );
};

export default AgeStep;
