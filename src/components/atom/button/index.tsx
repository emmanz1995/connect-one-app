import type { FC } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  label: string;
  backgroundColor?: string;
}

const Button: FC<ButtonProps> = ({ size, label, onClick }) => (
  <StyledButton size={size} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;