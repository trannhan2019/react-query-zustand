import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const Register = lazy(() => import('./pages/auth/Register/Register'));
const Login = lazy(() => import('./pages/auth/Login/Login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Register />,
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />,
      </Suspense>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
