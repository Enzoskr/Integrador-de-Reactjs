import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo necesario'),
    cellphone: Yup.string().required('Campo necesario'),
    location: Yup.string().required('Campo necesario'),
    address: Yup.string().required('Campo necesario'),
})

export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo necesario'),
    email: Yup.string()
    .matches(regEmail, 'Mail inválido')
    .required('Campo necesario'),
    password: Yup.string()
    .min( 6, 'Minimo 6 caracteres')
    .required('Campo necesario'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail inválido ')
    .required('Campo necesario'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .max(20, 'Máximo 20 caracteres')
    .required('Campo necesario'),
});
