import { styled } from "styled-components";

export const ProductosContainerStyled = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export const ProductsTitleStyled = styled.h2`

`
export const CardWrapperStyled = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 25px;

width: 80%;
height: 440px;
margin: 0 auto;

overflow: scroll;

&::-webkit-scrollbar {
  background: transparent;
  width: 6px;
}

&::-webkit-scrollbar-thumb {
  background: var(--gray-bg);
  border-radius: 5px;
}

&::-webkit-scrollbar:horizontal {
  display: none;
}

@media (max-height: 800px) {
  height: 270px;
}

@media (max-width: 1500px) {
  width: 100%;
}
`;

export const PriceContainerStyled = styled.div`
border-top: 4px solid var(--Gris);
margin: 0 auto;
width: 80%;
margin-top: 10px;
`
export const TotalStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const ShippingCostStyled = styled(TotalStyled)``;

export const TotalPriceStyled = styled(TotalStyled)``

export const PriceSpanStyled = styled.span`
  color: black;
  font-weight: 800;
  font-size: 20px;
  border-top: #e0e1dd;
`;
