import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15px auto;
  margin-top: 40px;
  border-top: 3px solid var(--lines);
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterInnerText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 33%;
  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FooterHelpStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-content: center;
`;
export const FooterUlStyled = styled.ul`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  border-left: 3px solid var(--lines);
`;
export const FooterLiStyled = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 2rem;
  cursor: pointer;
`;
export const ISSUEListStyled = styled(motion.li)`
  background-color: var(--lines);
  border: 1px solid var(--lines);
  text-align: center;
  cursor: pointer;
  span {
    display: none;
  }
`;
