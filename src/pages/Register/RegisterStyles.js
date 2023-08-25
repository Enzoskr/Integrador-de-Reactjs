import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerStyled = styled.div`
display: flex;
margin-top: 80px;
flex-direction: column;
background-color: var(--bg-metal);

height: 600px;
border-radius: 20px;
padding: 20px;
box-shadow: 4px 3px 10px 4px #000000;
img{
    display: flex;
    width: 110px;
    align-items: center;
}

`

export const LoginEmailStyled = styled(Link)`
display: flex;
margin-top: 20px;
flex-direction: column;
background-color: var(--bg-metal);
align-items: center;
margin: 0 auto;

& p{
    color : var(--colorLogo1);
}
:hover{
    text-decoration: underline;
    transition: all 0.5s ;
}


`
export const Form = styled(FormikForm)`
display: flex;
padding: 0 12px;
flex-direction: column;
align-items: center;
`
