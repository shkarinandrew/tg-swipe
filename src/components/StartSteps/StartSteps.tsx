import { FC, useState } from 'react';
import ArrowIcon from '../../assets/icons/arrow.svg';
import LogoIcon from '../../assets/icons/logo.svg';
import TelegramIcon from '../../assets/icons/telegram.svg';
import { AgePickerProps } from '../AgePicker/AgePicker.interface';
import Button from '../Button';
import { GenderType } from '../SelectGender/SelectGender.interface';
import AgeStep from './AgeStep';
import SexPartnerStep from './SexPartnerStep';
import SexStep from './SexStep';
import StartStep from './StartStep';

const StartSteps: FC = () => {
  const [step, setStep] = useState(0);
  const [isDisabledSex, setIsDisabledSex] = useState(true);
  const [isDisabledSexParent, setIsDisabledSexParent] = useState(true);

  const isFirstStep = step === 0;

  const handleSubmit = () => {
    setStep((prev) => prev + 1);
  };

  const handleClickSex = (type: GenderType) => {
    console.log(type);
    setIsDisabledSex(false);
  };

  const handleClickSexParent = (type: GenderType) => {
    console.log(type);
    setIsDisabledSexParent(false);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChangeAge: AgePickerProps['onChange'] = (age) => {
    console.log(age);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StartStep />;
      case 1:
        return <AgeStep onChange={handleChangeAge} />;
      case 2:
        return <SexStep onClick={handleClickSex} />;
      case 3:
        return <SexPartnerStep onClick={handleClickSexParent} />;
    }
  };

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 flex flex-col items-center px-4 pb-6 bg-white justify-between transition-all ${
        isFirstStep ? 'pt-6' : 'pt-4'
      }`}
    >
      <div className={`w-full relative ${isFirstStep ? 'h-[70px]' : 'h-10'}`}>
        {!isFirstStep && <ArrowIcon onClick={handleBack} />}
        <LogoIcon
          className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all ${
            isFirstStep ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>
      <div className='flex-1'>{renderStep()}</div>

      <Button
        icon={isFirstStep ? <TelegramIcon /> : undefined}
        className='w-full'
        onClick={handleSubmit}
        disabled={(step === 2 && isDisabledSex) || (step === 3 && isDisabledSexParent)}
      >
        {isFirstStep ? 'Login with Telegram' : 'Continue'}
      </Button>
    </div>
  );
};

export default StartSteps;
