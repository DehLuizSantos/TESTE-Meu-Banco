import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import store from 'store2';
import HamburguerButton from '@/components/atomos/HamburguerButton';
import { FadingComponent } from '@/components/Fade';
import { useLinks } from '@/hooks/useLinks';
import Container from '../Container';
import Header from '../Header';
import SideBar from '../SideBar';
import * as S from './styles';

type ShellProps = {
  children: React.ReactNode;
};
const Shell = ({ children }: ShellProps) => {
  const { handleGetLinks } = useLinks();
  const { data, isLoading } = useQuery({ queryKey: ['links'], queryFn: () => handleGetLinks() });
  const name = store.local.get('email').split('@')[0] ?? '';
  const [isToogleMobile, setIsToogleMobile] = useState(true);

  return (
    <S.ShellContainer>
      <Header user={name} />
      <S.ToogleMobile>
        <HamburguerButton
          isOpen={isToogleMobile}
          onToggle={() => setIsToogleMobile(!isToogleMobile)}
        />
      </S.ToogleMobile>

      {isLoading ? <></> : <SideBar links={data!} isToogleMobile={isToogleMobile} />}
      <Container>
        <FadingComponent duration={100}>{children}</FadingComponent>
      </Container>
    </S.ShellContainer>
  );
};

export default Shell;
