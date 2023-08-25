import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 8px 30px;
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  border: 2px solid var(--lines);
  cursor: pointer;
  margin-top: 16px;
  &:disabled {
    cursor: not-allowed;

  }

  
`;
