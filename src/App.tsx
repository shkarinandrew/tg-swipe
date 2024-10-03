import { FC } from 'react';
import StartSteps from './components/StartSteps';

const App: FC = () => {
  const isAuth = false;

  if (!isAuth) {
    return <StartSteps />;
  }

  return <h1>Hello</h1>;
};

export default App;
