import React from 'react'
import {Formik } from 'formik';

import { Link, useNavigate } from 'react-router-dom'
import Submit from '../../components/UI/Submit/Submit'

import {registerInitialValues} from '../../Formik/initialValues'	
import {registerValidationSchema} from '../../Formik/validationSchema'


import LoginInput from '../../components/UI/LoginInput/LoginInput'
import {
  LoginContainerStyled,
  LoginEmailStyled,
  Form
} from './RegisterStyles';

import { createUser } from '../../axios/axios-user'

import LogoBranding from '../../assets/Logo.png'
const Register = () => {

  const navigate = useNavigate()

  return (
    <LoginContainerStyled>
       <Link to= '/' >
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
      <h1>Crea tu cuenta</h1>
      <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={ async (values, actions) => {
        const user = await createUser(values.name, values.email, values.password)
        actions.resetForm();
        if(user){
          navigate('/login')

        }
      }}
      
      >
        <Form>
          <LoginInput name="name" type='text' placeholder='Nombre'/>
          <LoginInput name="email" type='text' placeholder='Email' />
          <LoginInput name="password" type='password' placeholder='Password' />

          <LoginEmailStyled to='/login'>
           <p> Inicia sesión si ya tienes una cuenta</p>
           </LoginEmailStyled>
           <Submit type='button'>
            Registrate
           </Submit>
       

        </Form>
      </Formik>
    </LoginContainerStyled>
  )
}

export default Register;