import { card, painelProps } from '@/data-base';

export const useConfigurations = () => {
  const handleGetconfigurations = () => {
    const data = { painel: painelProps, card };
    return data;
  };

  return { handleGetconfigurations };
};
