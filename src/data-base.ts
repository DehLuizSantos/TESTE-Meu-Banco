import { SidebarLinkProps } from '@/components/atomos/SidebarLink';
import carteira from '../src/assets/icons/carteira.svg';
import configuracoes from '../src/assets/icons/configuracoes.svg';
import painel from '../src/assets/icons/painel.svg';
import servicos from '../src/assets/icons/servicos.svg';
import transferencia from '../src/assets/icons/transferencia.svg';
import { CardInfoProps } from './components/atomos/CardInfo';
import { CardDetailsProps } from './components/moleculas/CardDetails';

export const painelProps: Array<CardInfoProps> = [
  {
    percentege: '+23%',
    type: 'default',
    info: 'Gasto esse mês',
    value: 'R$ 3.547,67',
  },
  {
    percentege: '+6% ',
    type: 'default',
    info: 'Recebido esse mês',
    value: 'R$ 7.648,48',
  },
  {
    percentege: '+R$ 242,13 (+2.54%)',
    type: 'badge',
    info: 'Investimentos',
    value: 'R$ 9.532,62',
  },
  {
    percentege: '',
    type: 'default',
    info: 'Cartões',
    value: 'R$ 9.532,62',
  },
];

export const card: CardDetailsProps = {
  lastPurchase: {
    local: 'Bazar Mizutu',
    type: 'credito',
    value: 300,
  },
  creditCard: {
    cardHolder: '',
    cardNumber: '1234 1234 1234 1234',
    expirationDate: '12/32',
  },
  totalLimit: 3000,
  usedLimit: 300,
};

export const links: Array<SidebarLinkProps> = [
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
