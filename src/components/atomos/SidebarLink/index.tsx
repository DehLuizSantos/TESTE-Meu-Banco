import { useLocation } from 'react-router-dom';
import { theme } from '../../../styles/theme';
import Icon from '../Icon';
import * as S from './styles';

export type SidebarLinkProps = {
  icon: string;
  label: string;
  to: string;
};

const SidebarLink = ({ icon, label, to }: SidebarLinkProps) => {
  const location = useLocation();

  return (
    <S.LinkWrapper to={to}>
      <S.LinkDescription
        style={{
          background: `${location.pathname === to ? theme.colors.green : theme.colors.white}`,
          color: `${location.pathname === to ? theme.colors.white : theme.colors.gray}`,
        }}
      >
        <Icon
          svg={icon}
          width={20}
          height={20}
          fill={`${location.pathname === to ? theme.colors.white : theme.colors.gray}`}
        />
        <span>{label}</span>
      </S.LinkDescription>
    </S.LinkWrapper>
  );
};

export default SidebarLink;
