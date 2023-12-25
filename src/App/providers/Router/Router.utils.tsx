import type { RouteProps } from 'react-router-dom';
import { ResumeFormStepOne, ResumeFormStepTwo, ResumeFormStepThree, ResumeFormResult } from 'entities/resumeForm';
import { NavLink } from 'react-router-dom';

const resumeFormData: RouteProps[] = [
  {
    path: '/form/1',
    element: <ResumeFormStepOne />,
  },
  {
    path: '/form/2',
    element: <ResumeFormStepTwo />,
  },
  {
    path: '/form/3',
    element: <ResumeFormStepThree />,
  },
  {
    path: '/form/result',
    element: <ResumeFormResult />,
  }
];

export const routesData: RouteProps[] = [
  {
    path: '/',
    element: <NavLink to={'/form/1'} style={{ color: '#fff', fontSize: '40px' }}>Открыть форму</NavLink>,
  },
  {
    path: '*',
    element: 'not found'
  },
  ...resumeFormData
];