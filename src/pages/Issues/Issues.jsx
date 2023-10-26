import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import {
  // IssuesStyles,
  IssueContainerStyled,
  Form,
  // LoginEmailStyled,
  // Formik,
} from "./IssuesStyles";
import { useSelector } from "react-redux";

import { issueInitialValues } from "../../Formik/initialValues";
import { issuevalidationSchema } from "../../Formik/validationSchema";

import { createIssue } from "../../axios/axios-issue";
import { ADMIN } from "../../utils";

const Issues = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.rol !== ADMIN) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <IssueContainerStyled>
      <h1>Escribe la ISSUE</h1>
      <Formik
        initialValues={issueInitialValues}
        validationSchema={issuevalidationSchema}
        onSubmit={async (values) => {
          await createIssue(
            values.title,
            values.description,
            values.priority,
            currentUser
          );
          navigate("/");
        }}
      >
        <Form>
          <LoginInput name="title" type="text" placeholder="title" />
          <LoginInput
            name="description"
            type="text"
            placeholder="description"
          />
          <LoginInput name="priority" type="number" placeholder="priority" />
          <Submit>Crear Issue</Submit>
        </Form>
      </Formik>
    </IssueContainerStyled>
  );
};

export default Issues;
