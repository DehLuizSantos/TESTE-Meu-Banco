import { useState } from 'react';
import ButtonCustom from '@/components/atomos/Button';
import HamburguerButton from '@/components/atomos/HamburguerButton';
import SidebarLink, { SidebarLinkProps } from '@/components/atomos/SidebarLink';
import Logo from '../../../assets/imagens/logo.png';
import { theme } from '../../../styles/theme';
import * as S from './styles';

type SidebarProps = {
  links: Array<SidebarLinkProps>;
  isToogleMobile: boolean;
};

const SideBar = ({ links, isToogleMobile }: SidebarProps) => {
  return (
    <S.SidebarWrapper style={{ display: isToogleMobile ? 'block' : 'none' }}>
      <S.LogoWrapper>
        <img title="Meu Banco App" src={Logo} alt="Meu Banco" />
      </S.LogoWrapper>
      <S.MenuSidebarWrapper>
        {links.map((link) => (
          <SidebarLink {...link} key={link.label} />
        ))}
      </S.MenuSidebarWrapper>

      <S.HelpSidebarFooter>
        <div className="description">
          <h3>Precisa de ajuda?</h3>
          <p>Fale com um dos nossos especialistas</p>
          <ButtonCustom fullWidth color={theme.colors.white} tipo="outline">
            CONTATAR
          </ButtonCustom>
        </div>
      </S.HelpSidebarFooter>
    </S.SidebarWrapper>
  );
};

export default SideBar;
