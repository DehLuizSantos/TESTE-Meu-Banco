import { toast } from 'react-toastify';
import ButtonCustom from '@/components/atomos/Button';
import CreditCard from '@/components/atomos/CreditCard';
import Progress from '@/components/atomos/Progress';
import { theme } from '@/styles/theme';
import { formatNumber } from '@/utils/validateEmail';
import card from '../../../assets/imagens/cartao.svg';
import * as S from './styles';

export type PurchaceProps = {
  local?: string;
  value?: number;
  type?: 'debito' | 'credito';
};

export type CardDetailsProps = {
  totalLimit?: number;
  usedLimit?: number;
  lastPurchase?: PurchaceProps;
  creditCard?: {
    cardHolder: string;
    cardNumber: string;
    expirationDate: string;
  };
};

const CardDetails = ({ totalLimit, usedLimit, lastPurchase, creditCard }: CardDetailsProps) => {
  return (
    <S.CardDetailsContainer>
      <h5>Cartões</h5>
      <div className="description">
        <S.CartLimitContainer>
          {/* <img src={card} alt="Cartão de crédito" /> */}
          <CreditCard {...creditCard!} />
          <Progress style={{ margin: '15px 0 4px 0' }} value={usedLimit!} max={totalLimit!} />
          <div className="limit">
            <span>Limite mensal</span>
            <div className="value">
              <span className="value">R${formatNumber(usedLimit!)}/</span>
              <span className="value">{formatNumber(totalLimit!)}</span>
            </div>
          </div>
        </S.CartLimitContainer>
        <S.LimitDescription>
          <p>Limite disponível</p>
          <h6>R$ {formatNumber(totalLimit!)}</h6>

          <p>Última compra</p>

          <div className="local">
            <span>{lastPurchase?.local}</span>
            <span>R${lastPurchase?.value}</span>
          </div>
          <ButtonCustom
            onClick={() => toast.error('Erro ao acessar mais detalhes!')}
            fullWidth
            tipo="default"
            color={theme.colors.green}
          >
            MAIS DETALHES
          </ButtonCustom>
        </S.LimitDescription>
      </div>
    </S.CardDetailsContainer>
  );
};

export default CardDetails;
