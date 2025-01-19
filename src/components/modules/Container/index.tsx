import React from 'react';
import * as S from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
};

export default Container;
