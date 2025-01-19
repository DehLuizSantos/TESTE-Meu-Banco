import { SidebarLinkProps } from '@/components/atomos/SidebarLink';
import carteira from '../../assets/icons/carteira.svg';
import configuracoes from '../../assets/icons/configuracoes.svg';
import painel from '../../assets/icons/painel.svg';
import servicos from '../../assets/icons/servicos.svg';
import transferencia from '../../assets/icons/transferencia.svg';

export const useLinks = () => {
  const handleGetLinks = () => {
    const links: Array<SidebarLinkProps> = [
      {
        label: 'painel',
        icon: painel,
        to: '/painel',
      },
      {
        label: 'carteira',
        icon: carteira,
        to: '/carteira',
      },
      {
        label: 'Transferências',
        icon: transferencia,
        to: '/transferencia',
      },
      {
        label: 'Serviços',
        icon: servicos,
        to: '/servicos',
      },
      {
        label: 'Configurações',
        icon: configuracoes,
        to: '/configuracoes',
      },
    ];
    return links;
  };

  return { handleGetLinks };
};
