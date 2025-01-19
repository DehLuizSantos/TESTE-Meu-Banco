import Icon from '@/components/atomos/Icon';
import { RightSelect } from '@/components/atomos/Input/styles';
import buscar from '../../../assets/icons/buscar.svg';
import sino from '../../../assets/icons/sino.svg';
import usuario from '../../../assets/icons/usuario.svg';
import InputCustom from '../../atomos/Input';
import * as S from './styles';

type HeaderProps = {
  user: string;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <InputCustom
        inputType="outline"
        placeholder="Buscar"
        leftSection={
          <RightSelect>
            <Icon svg={buscar} fill={'white'} width={20} height={20} />
          </RightSelect>
        }
      />
      <S.UserInformations>
        <Icon svg={sino} />
        <div className="user">
          <Icon svg={usuario} />
          <p>Bem vindo, </p>
          <span>{user}</span>
        </div>
      </S.UserInformations>
    </S.HeaderContainer>
  );
};

export default Header;
