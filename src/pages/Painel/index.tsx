import { useQuery } from '@tanstack/react-query';
import CardDetails from '@/components/moleculas/CardDetails';
import PainelConfigurations from '@/components/moleculas/PainelConfigurations';
import { useConfigurations } from '@/hooks/useConfigurations';
import * as S from './styles';

const Painel = () => {
  const { handleGetconfigurations } = useConfigurations();
  const { data, isLoading } = useQuery({
    queryKey: ['configurations'],
    queryFn: () => handleGetconfigurations(),
  });
  console.log(data);

  return (
    <S.PainelWrapper>
      {isLoading ? (
        <></>
      ) : (
        <div className="container">
          <PainelConfigurations cardsInfos={data?.painel!} />
          <CardDetails {...data?.card} />
        </div>
      )}
    </S.PainelWrapper>
  );
};

export default Painel;
