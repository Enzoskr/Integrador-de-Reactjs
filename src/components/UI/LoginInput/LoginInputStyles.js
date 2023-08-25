import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 2px ;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 10px;
  color: black;
  background-color: var(--Gris);
  border-radius: 10px;
  border: ${({ isError }) => (isError ? '1px solid red ' : '#0000001c')};
  -webkit-text-fill-color: black;

`;

export const ErrorMessageStyled = styled.p`
margin-top: 5px;
color: #fb103d;
font-size: 14px;
`;
