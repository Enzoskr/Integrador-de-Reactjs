import { styled } from "styled-components";

export const CardContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: 90%;
  background-color: var(--Gris);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border: 2px solid var(--lines);
  padding: 10px;
  height: 85px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    padding: 5px;
    border: 1px solid var(--lines);
    img {
      height: 60px;
      width: 60px;
    }
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  flex-direction: column;
  gap: 2px;
  width: 450px;
  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
`;

export const ProductNameStyles = styled.h3`
  margin: 0;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const TextStyled = styled.h3`
  margin: 0;
  color: black;
  font-weight: 800;
`;

export const ProductPriceStyles = styled.p`
  margin: 0;

  font-weight: 500;
  color: var(--btn-gradient);
`;

export const QuantityContainerStyles = styled.div`
  display: flex;
  align-items: center;
`;
