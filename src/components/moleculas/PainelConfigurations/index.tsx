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
    </S.PainelConfigurationsWrapper>
  );
};

export default PainelConfigurations;
