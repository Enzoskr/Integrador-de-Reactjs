import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #bde0fe;

  width: 450px;
  top: calc(16px + 2rem);
  right: 0;
  z-index: 98;
  border-radius: 0 0 0 30px;
  padding: 2rem;
  box-shadow: -6px 5px 12px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: -6px 5px 12px 1px rgba(0,0,0,0.75);
-moz-box-shadow: -6px 5px 12px 1px rgba(0,0,0,0.75);
  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  border-bottom: 4px solid black;
  padding-bottom: 4px ;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
