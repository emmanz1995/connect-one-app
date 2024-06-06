import styled from 'styled-components';
import { ButtonProps } from './index';

export const StyledButton = styled.button<{ size: ButtonProps['size'] }>`
  padding: ${({ size }) => size === 'small' ? '8px 16px' : size === 'medium' ? '12px 24px' : '16px 32px'};
  font-size: ${props => props.size === 'small' ? '13px' : props.size === 'medium' ? '15px' : '17px'};
  background-color: ${props => props.theme.light_color};
  border: 2px solid ${props => props.theme.purple_color};
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  color: ${props => props.theme.purple_color};
  font-weight: bold;
`;