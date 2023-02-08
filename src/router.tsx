import { createBrowserRouter } from 'react-router-dom';

import { Root, Error } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
  },
]);
