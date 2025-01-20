import { CardInfoProps } from '@/components/atomos/CardInfo';
import PainelConfigurations from '@/components/moleculas/PainelConfigurations';
import * as S from './styles';

const Painel = () => {
  const painelProps: Array<CardInfoProps> = [
    {
      percentege: '+23%',
      type: 'default',
      info: 'Gasto esse mês',
      value: 'R$ 3.547,67',
    },
    {
      percentege: '+23%',
      type: 'default',
      info: 'Gasto esse mês',
      value: 'R$ 3.547,67',
    },
    {
      percentege: '+23%',
      type: 'default',
      info: 'Gasto esse mês',
      value: 'R$ 3.547,67',
    },
    {
      percentege: '+23%',
      type: 'default',
      info: 'Gasto esse mês',
      value: 'R$ 3.547,67',
    },
  ];
  return (
    <S.PainelWrapper>
      <PainelConfigurations cardsInfos={painelProps} />
    </S.PainelWrapper>
  );
};

export default Painel;
