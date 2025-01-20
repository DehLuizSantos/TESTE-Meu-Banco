import React from 'react';
import * as S from './styles';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // Progresso atual (0 a 100)
  max?: number; // Valor máximo (padrão: 100)
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100, ...props }) => {
  const progressPercentage = Math.min((value / max) * 100, 100);

  return (
    <S.ProgressContainer
      {...props}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-valuemin={0}
    >
      <S.ProgressBar progress={progressPercentage} />
    </S.ProgressContainer>
  );
};

export default Progress;
