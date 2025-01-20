import { card, extract, painelProps } from '@/data-base';

export const useConfigurations = () => {
  const handleGetconfigurations = () => {
    const data = { painel: painelProps, card, data: extract.data };
    return data;
  };

  return { handleGetconfigurations };
};
