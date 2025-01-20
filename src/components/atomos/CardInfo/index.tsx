import * as S from './styles';

export type CardInfoProps = {
  percentege: string;
  type: 'default' | 'badge';
  info: string;
  value: string;
};

const CardInfo = ({ type, info, percentege, value }: CardInfoProps) => {
  return (
    <S.CardInfoWrapper>
      {type === 'default' ? <h5>{percentege}</h5> : <div>{percentege}</div>}
      <p>{info}</p>
      <h4>{value}</h4>
    </S.CardInfoWrapper>
  );
};

export default CardInfo;
