import { createContext, FC, useState } from 'react';

type FirstStartModalContextType = {
  isFirstStart: boolean;
  toggleIsFirstStart: () => void;
};

interface FirstStartModalContextProps {
  children: React.ReactNode;
}

const IS_FIRST_START = 'isFirstStart';

export const FirstStartModalContext = createContext<FirstStartModalContextType | null>(
  null,
);

export const FirstStartModalContextProvider: FC<FirstStartModalContextProps> = ({
  children,
}) => {
  const lsIsFirstStart = localStorage.getItem(IS_FIRST_START);

  const [isFirstStart, setIsFirstStart] = useState(!!lsIsFirstStart);

  const toggleIsFirstStart = () => {
    localStorage.setItem(IS_FIRST_START, 'true');

    setIsFirstStart((prev) => !prev);
  };

  const contextValue: FirstStartModalContextType = {
    isFirstStart,
    toggleIsFirstStart,
  };

  return (
    <FirstStartModalContext.Provider value={contextValue}>
      {children}
    </FirstStartModalContext.Provider>
  );
};
