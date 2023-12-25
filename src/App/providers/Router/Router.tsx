import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesData } from './Router.utils';

export const Router: FC = () => {

  return (
    <Routes>
      {routesData.map((route) => <Route key={route.path} {...route} />)}
    </Routes>
  );
};