import styled from "styled-components";
import { motion } from "framer-motion";

export const IncreaseStyled = styled(motion.button)`
  background: ${({ bgcolor }) => bgcolor || "var(--colorLogo1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 425px) {
    font-size: 20px;
    width: 28px;
    height: 28px;
  }
`;
