import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const IssueContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginEmailStyled = styled.p`
  color: var(--colorLogo1);

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
