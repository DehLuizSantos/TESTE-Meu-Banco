import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shell from './components/modules/Shell';
import Carteira from './pages/Carteira';
import Configuracoes from './pages/Configuracoes';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Servicos from './pages/Servicos';
import Transferencia from './pages/Transferencia';

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
  {
    path: '/carteira',
    element: (
      <Shell>
        <Carteira />
      </Shell>
    ),
  },
  {
    path: '/transferencia',
    element: (
      <Shell>
        <Transferencia />
      </Shell>
    ),
  },
  {
    path: '/servicos',
    element: (
      <Shell>
        <Servicos />
      </Shell>
    ),
  },
  {
    path: '/configuracoes',
    element: (
      <Shell>
        <Configuracoes />
      </Shell>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
