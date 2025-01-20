import { Burger } from '@mantine/core';
import { theme } from '@/styles/theme';

interface HamburguerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HamburguerButton: React.FC<HamburguerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <Burger
      color={theme.colors.white}
      opened={isOpen}
      onClick={onToggle}
      aria-label="Toggle navigation"
    />
  );
};

export default HamburguerButton;
