import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLinks } from '@/hooks/useLinks';
import Container from '../Container';
import Header from '../Header';
import SideBar from '../SideBar';

type ShellProps = {
  children: React.ReactNode;
};
const Shell = ({ children }: ShellProps) => {
  const { handleGetLinks } = useLinks();
  const { data, isLoading } = useQuery({ queryKey: ['links'], queryFn: () => handleGetLinks() });
  console.log(data);

  return (
    <div>
      <Header user="Tide Cardoso" />
      {isLoading ? <></> : <SideBar links={data!} />}
      <Container>{children}</Container>
    </div>
  );
};

export default Shell;
