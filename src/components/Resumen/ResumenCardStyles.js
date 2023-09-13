import styled from "styled-components";

export const ProductStyled = styled.div`
  border-top: 2px solid var(--lines);
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
  P {
    color: black;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2px;
    border: 2px solid var(--lines);
    padding: 1rem 0.5rem;
    img {
      width: 80px;
      object-fit: cover;
    }
    flex-direction: column;
  }
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
    border-bottom: 2px solid var(--lines);
    gap: 6px;
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
  }
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
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
