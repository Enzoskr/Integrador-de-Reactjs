import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--gray-bg);
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 620px;
  img {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 80px;
    }
    flex-direction: column;
  }
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  color: transparent;
`;
