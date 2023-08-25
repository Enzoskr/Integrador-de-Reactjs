import  styled  from "styled-components";
import { Formik as FormikContainer, Form as FormikForm} from "formik";


export const CheckoutDatosStyled = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export const Formik = styled(FormikContainer)`
display: flex;
flex-direction: wrap;
flex-direction: column;
`
export const Form = styled(FormikForm)`
display: flex;
flex-wrap: wrap;


`

export const SubmitBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 1rem;
`