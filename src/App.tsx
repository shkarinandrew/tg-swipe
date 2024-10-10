import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import StartSteps from './components/StartSteps';
import { useFirstStart } from './hooks';
import Layout from './Layout';
import { routers } from './routers';

const App: FC = () => {
  const { isFirstStart } = useFirstStart();

  if (!isFirstStart) {
    return <StartSteps />;
  }

  return (
    <Layout>
      <Routes>
        {routers.map((route) => (
          <Route path={route.path} key={route.path} Component={route.component} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
