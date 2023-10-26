import * as Yup from "yup";
import { regEmail } from "../utils/regExp";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo necesario"),
  cellphone: Yup.string().required("Campo necesario"),
  location: Yup.string().required("Campo necesario"),
  address: Yup.string().required("Campo necesario"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Campo necesario"),
  email: Yup.string()
    .matches(regEmail, "Mail inválido")
    .required("Campo necesario"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo necesario"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Mail inválido ")
    .required("Campo necesario"),
  password: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Campo necesario"),
});

export const validateValidationSchema = Yup.object({
  code: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
    .max(6, "Máximo 6 caracteres")
    .required("Campo necesario"),
});

export const issuevalidationSchema = Yup.object({
  title: Yup.string().required("Campo necesario"),
  description: Yup.string().required("Campo necesario"),
  priority: Yup.string().required("Campo necesario"),
  category: Yup.string().required("Campo necesario"),
});
