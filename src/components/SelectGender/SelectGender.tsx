import { FC, useState } from 'react';
import GirlIcon from '../../assets/icons/girl.svg';
import ManIcon from '../../assets/icons/man.svg';
import { GenderType, SelectGenderProps } from './SelectGender.interface';

const SelectGender: FC<SelectGenderProps> = ({ className = '', onClick, ...props }) => {
  const [select, setSelect] = useState<GenderType | null>(null);

  const handleSelect = (gender: GenderType) => {
    onClick(gender);
    setSelect(gender);
  };

  const isActive = (type: GenderType) => {
    if (select === type) {
      return 'bg-[#FF5069] text-white';
    }

    return 'bg-[#FFDCE1] text-[#AAAAAA]';
  };

  return (
    <div {...props} className={`flex flex-col gap-8 items-center ${className}`}>
      <div
        aria-hidden
        onClick={() => handleSelect('male')}
        className={`cursor-pointer transition-colors flex flex-col justify-center items-center rounded-full w-[150px] h-[150px] text-center ${isActive(
          'male',
        )}`}
      >
        <ManIcon />
        <div>Male</div>
      </div>
      <div
        aria-hidden
        onClick={() => handleSelect('female')}
        className={`cursor-pointer flex flex-col justify-center items-center rounded-full w-[150px] h-[150px] text-center ${isActive(
          'female',
        )}`}
      >
        <GirlIcon />
        <div>Female</div>
      </div>
    </div>
  );
};

export default SelectGender;
