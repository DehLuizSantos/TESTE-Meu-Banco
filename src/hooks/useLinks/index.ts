import { links } from '@/data-base';

export const useLinks = () => {
  const handleGetLinks = () => {
    return links;
  };

  return { handleGetLinks };
};
