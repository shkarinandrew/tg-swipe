import { useContext } from 'react';
import { FirstStartModalContext } from '../context';

export const useFirstStart = () => {
  const context = useContext(FirstStartModalContext);

  if (!context) {
    throw new Error('useFirstStart must be used within a FirstStartModalProvider');
  }

  return context;
};
