import { FC } from 'react';
import mainImg from '../../assets/imgs/main.png';

const StartStep: FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full mt-4'>
        <img src={mainImg} alt='main' className='w-full h-full object-cover' />
      </div>

      <div className='font-semibold text-[32px] leading-tight text-center'>
        Find you love
        <br />
        and <span className='text-[#FF7387]'>earn</span>!
      </div>

      <p className='text-[#555555] text-center max-w-[280px] mt-4'>
        Find the one and share your passions, quirks,and everything in between. Your
        exciting adventure starts here! 😉
      </p>
    </div>
  );
};

export default StartStep;
