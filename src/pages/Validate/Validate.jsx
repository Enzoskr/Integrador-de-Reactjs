import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ValidateContainerStyled, ValidateTitleStyled } from "./ValidateStyles";
import { verifyUser } from "../../axios/axios-user";
import { setVerified } from "../../redux/user/userSlice";
import { validateInitialValues } from "../../Formik/initialValues";
import { validateValidationSchema } from "../../Formik/validationSchema";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.verified) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <span>
        Te va a llegar un correo, revisalo. esto es fundamental para tu
        seguridad e integridad de tu cuenta
      </span>
      <ValidateTitleStyled>Validar cuenta</ValidateTitleStyled>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async (values) => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate("/");
          alert("Usuario verificado");
        }}
      >
        <Form>
          <LoginInput
            name="code"
            type="text"
            placeholder="Codigo de verificacion"
          />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
      <span>
        Validarse en esta página web es esencial para garantizar la seguridad de
        los usuarios, prevenir el fraude, personalizar la experiencia, ofrecer
        funciones premium, gestionar datos de usuarios, cumplir con regulaciones
        y mejorar la confiabilidad de tu sitio.
      </span>
    </ValidateContainerStyled>
  );
};

export default Validate;
