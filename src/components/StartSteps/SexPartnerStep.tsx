import { FC } from 'react';
import Progressbar from '../Progressbar';
import SelectGender from '../SelectGender';
import { GenderType } from '../SelectGender/SelectGender.interface';

interface SexPartnerStepProps {
  onClick: (gender: GenderType) => void;
}

const SexPartnerStep: FC<SexPartnerStepProps> = ({ onClick }) => {
  return (
    <div className='flex flex-col items-center mt-4'>
      <Progressbar count={3} maxCount={3} className='!w-[180px]' />

      <div className='mt-4 w-full font-semibold text-2xl leading-tight text-center'>
        What gender are
        <br />
        you looking for?
      </div>

      <SelectGender onClick={onClick} className='mt-7' />
    </div>
  );
};

export default SexPartnerStep;
