import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResumenContainerStyled = styled.div`
  padding: 60px 0;
  max-width: 1200px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
    font-size: 8px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: var(--gray-bg);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: var(--btn-gradient);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
  border-bottom: 2px solid var(--lines);
  margin-bottom: 10px;
`;

export const ResumenContainerInfoStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;

  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  font-size: 20px;
  border-top: 2px solid var(--lines);

  font-weight: bold;
`;
