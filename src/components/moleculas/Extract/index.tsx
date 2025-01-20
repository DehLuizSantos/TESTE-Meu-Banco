import { toast } from 'react-toastify';
import ButtonCustom from '@/components/atomos/Button';
import { theme } from '@/styles/theme';
import { formatNumber } from '@/utils/validateEmail';
import { PurchaceProps } from '../CardDetails';
import * as S from './styles';

export type ExtractProp = {
  date: string;
  purchace: Array<PurchaceProps>;
};

export type ExtractProps = {
  data: Array<ExtractProp>;
};
const Extract = ({ data }: ExtractProps) => {
  return (
    <S.ExtractWrapper>
      <h4>Últimas compras</h4>
      {data.map((extract) => (
        <div className="extract-container">
          <h5>{extract.date}</h5>
          {extract.purchace.map((purchace) => (
            <div className="purchace">
              <div className="infos">
                <p>{purchace.local}</p>
                <h6>{purchace.type === 'credito' ? 'Compra no crédito' : 'Compra no débito'}</h6>
              </div>
              <span>R$ {formatNumber(purchace.value!)}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="button-wrapper">
        <ButtonCustom
          onClick={() => toast.error('Erro ao tentar acessar ver extrato')}
          className="button-extract"
          tipo="default"
          color={theme.colors.green}
        >
          VER EXTRATO
        </ButtonCustom>
      </div>
    </S.ExtractWrapper>
  );
};

export default Extract;
