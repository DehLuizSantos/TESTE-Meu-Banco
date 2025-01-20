import { toast } from 'react-toastify';
import CardInfo, { CardInfoProps } from '@/components/atomos/CardInfo';
import * as S from './styles';

type PainelConfigurationsProps = {
  cardsInfos: Array<CardInfoProps>;
};

const PainelConfigurations = ({ cardsInfos }: PainelConfigurationsProps) => {
  return (
    <S.PainelConfigurationsWrapper>
      {cardsInfos.map((card) => (
        <CardInfo {...card} key={card.percentege} />
      ))}
      <S.PainelConfigurationsShortCut
        onClick={() => toast.error('Erro ao tentar configurar atalhos!')}
      >
        <div className="plus">
          <span>+</span>
        </div>
        <p>configurar atalhos</p>
      </S.PainelConfigurationsShortCut>
    </S.PainelConfigurationsWrapper>
  );
};

export default PainelConfigurations;
