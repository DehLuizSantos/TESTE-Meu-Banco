import React from 'react';
import store from 'store2';
import aproximacao from '../../../assets/icons/aproximacao.svg';
import master from '../../../assets/icons/master.svg';
import ship from '../../../assets/icons/ship.svg';
import logo from '../../../assets/imagens/logo-white.svg';
import Icon from '../Icon';
import * as S from './styles';

interface CreditCardProps {
  cardHolder: string; // Nome do titular
  cardNumber: string; // Número do cartão
  expirationDate: string; // Data de validade
}

const CreditCard: React.FC<CreditCardProps> = ({ cardHolder, cardNumber, expirationDate }) => {
  const holder = store.local.get('email').split('@')[0] ?? cardHolder;

  return (
    <S.CardContainer>
      <Icon svg={logo} width={72} height={15} fill={'white'} />
      <div className="icons">
        <Icon svg={ship} fill={'white'} />
        <Icon svg={aproximacao} fill={'white'} />
      </div>
      <S.CardNumber>{cardNumber.replace(/(\d{4})/g, '$1 ').trim()}</S.CardNumber>
      <S.CardHolderSection>
        <S.CardHolder>{holder.toUpperCase()}</S.CardHolder>
        <S.ExpirationDate>
          <span>validate</span>
          {expirationDate}
        </S.ExpirationDate>
        <Icon svg={master} />
      </S.CardHolderSection>
    </S.CardContainer>
  );
};

export default CreditCard;
