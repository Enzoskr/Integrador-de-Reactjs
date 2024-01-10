import styled from "styled-components";

export const ValidateContainerStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 250px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px 20px;
  padding: 20px;
  background-color: #8b8c89;
  border-radius: 6px;

  border: 1px solid var(--lines);
  @media (max-width: 768px) {
    width: 90%;
  }
  span {
    opacity: 0.7;
    text-decoration: dashed;
    margin-top: 12px;
  }
`;
export const ValidateTitleStyled = styled.h1`
  font-size: 24px;
  text-align: center;

  font-weight: 700;
  margin: 0;
`;

export const LoginInputStyled = styled.input`
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  gap: 12px;
`;

export const FormStyled = styled.form`
  gap: 12px;
`;
