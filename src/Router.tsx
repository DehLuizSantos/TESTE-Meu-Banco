import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shell from './components/modules/Shell';
import { HomePage } from './pages/Home.page';
import Painel from './pages/Painel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
