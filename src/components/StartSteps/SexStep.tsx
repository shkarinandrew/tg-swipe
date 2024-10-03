import { FC } from 'react';
import Progressbar from '../Progressbar';
import SelectGender from '../SelectGender';
import { GenderType } from '../SelectGender/SelectGender.interface';

interface SexStepProps {
  onClick: (gender: GenderType) => void;
}

const SexStep: FC<SexStepProps> = ({ onClick }) => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <Progressbar count={2} maxCount={3} className='!w-[180px]' />

      <div className='w-full mt-4'>
        <div className='font-semibold text-2xl leading-tight text-center'>
          What’s Your Gender?
        </div>
        <div className='text-sm text-[#555555] text-center mt-1'>
          Tell us about your gender
        </div>
      </div>

      <SelectGender onClick={onClick} className='mt-7' />
    </div>
  );
};

export default SexStep;
