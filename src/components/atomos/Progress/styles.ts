import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${theme.colors.green};
  transition: width 0.3s ease;
`;
