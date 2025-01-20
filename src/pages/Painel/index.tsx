import { useQuery } from '@tanstack/react-query';
import CardDetails from '@/components/moleculas/CardDetails';
import Extract from '@/components/moleculas/Extract';
import PainelConfigurations from '@/components/moleculas/PainelConfigurations';
import { useConfigurations } from '@/hooks/useConfigurations';
import * as S from './styles';

const Painel = () => {
  const { handleGetconfigurations } = useConfigurations();
  const { data, isLoading } = useQuery({
    queryKey: ['configurations'],
    queryFn: () => handleGetconfigurations(),
  });

  return (
    <S.PainelWrapper>
      {isLoading ? (
        <></>
      ) : (
        <div className="container">
          <PainelConfigurations cardsInfos={data?.painel!} />
          <div className="footer">
            <CardDetails {...data?.card} />
            <Extract data={data?.data!} />
          </div>
        </div>
      )}
    </S.PainelWrapper>
  );
};

export default Painel;
