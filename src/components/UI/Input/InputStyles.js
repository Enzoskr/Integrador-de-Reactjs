import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
  width: 50%;
  

`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  color: black;
  font-weight: 700;
`;

export const InputStyled = styled.input`
  background-color: var(--Gris);
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid red ' : 'none')};
  border-radius: 5px;
  height: 30px;
  padding: 6px 10px ;
  color: black;
  width: 70%;
  border: 1px solid var(--lines);
-webkit-text-fill-color: black;
  ::placeholder {
    opacity: 70%;
  }
  

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
