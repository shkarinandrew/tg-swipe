import { FC } from 'react';
import { DislikeIcon, LikeIcon } from '../../assets/icons';

const LoockingUserCard: FC = () => {
  return (
    <div
      className='h-[calc(100%-64px)] w-full rounded-3xl flex flex-col justify-between items-center overflow-hidden pb-2.5 mt-2'
      style={{
        background: `url('https://img.freepik.com/premium-photo/portrait-beautiful-sexy-girl_942478-5227.jpg') center center / cover no-repeat`,
      }}
    >
      <div className='w-full h-20 bg-gradient-to-b from-black to-transparent font-medium text-2xl text-white px-5 flex items-center gap-2'>
        <div className='w-8 h-8 rounded-full bg-[#F7A0FF] flex justify-center items-center'>
          I
        </div>{' '}
        Evа, 27
      </div>
      <div className='flex items-center justify-around w-full text-white'>
        <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
          <DislikeIcon />
        </div>
        <div className='text-4xl z-[1] relative font-semibold before:content-[""] before:block before:w-20 before:h-20 before:rounded-full before:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,80,105,0.80)_0%,rgba(255,80,105,0.00)_100%)] before:absolute before:-top-1/2 before:-left-1/2 before:-z-[1]'>
          12
        </div>
        <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};

export default LoockingUserCard;
