import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  gap: 6px;
  padding: 1rem;
  grid-template-columns: ${({ gridlength }) => `repeat(${gridlength}, 1fr)`};
  overflow: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 5px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--colorLogo2);
    border-radius: 6px;
    opacity: 50%;
  }
  &::-webkit-scrollbar:vertical {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 6px;

    h3 {
      font-size: 14px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  border-radius: 1rem;
  background-color: antiquewhite;
  transition: all 0.3s ease-in-out;
  width: 410px;
  height: 100px;
  flex: 0 0 auto;

  @media (max-width: 768px) {
    width: 340px;
    font-size: 10px;
    height: 100px;
    padding: 0px 6px;
    gap: 12px;
  }
`;

export const CardImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;
export const CardTitle = styled.h3`
  margin: 0;
  /* margin-bottom: 5px; */
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.05rem;

  width: 200px;
  :hover {
    white-space: normal;
    text-overflow: initial;
  }
  @media (max-width: 425px) {
    letter-spacing: normal;
  }
`;

export const CardText = styled.div`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  flex-direction: column;
`;

export const CardPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  text-shadow: 1px 1px 1px #fff;
  color: var(--colorLogo1);
`;
export const InfoCard = styled.div`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const sizeSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
