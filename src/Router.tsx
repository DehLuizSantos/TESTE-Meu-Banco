import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shell from './components/modules/Shell';
import Login from './pages/Login';
import Painel from './pages/Painel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/painel',
    element: (
      <Shell>
        <Painel />
      </Shell>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
