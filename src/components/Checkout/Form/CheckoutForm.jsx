import React from 'react'
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form, SubmitBtn } from './CheckoutFormStyles';

import {checkoutInitialValues} from "../../../Formik/initialValues"
import {checkoutValidationSchema} from "../../../Formik/validationSchema"
import { createOrder } from '../../../axios/axios-orders';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({cartItems, price, shippingCost}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {currentUser} = useSelector(state => state.user)
  return (
    <CheckoutDatosStyled>
      <h2>Ingresa tus datos</h2>
      <Formik
      initialValues={checkoutInitialValues}
      validationSchema={checkoutValidationSchema}
      onSubmit={ async (values) => {
        const orderData = {
          items : cartItems,
          price,
          shippingCost,
          total: price + shippingCost,
          shippingDetails: {
            ...values
          }
        }
        try{
          await createOrder(orderData, dispatch, currentUser);
          navigate('/felicitaciones')
          alert(' felicitaciones, tu pedido fue creado con exito')
          dispatch(clearCart())
        } catch (error){
          console.log(error)
          alert('hubo un error al crear el pedido')

        }

      }
    }
      >
      <Form>
        <Input
        htmlFor='nombre'
        type='text'
        id='nombre'
        placeholder='Nombre'
        name='name'
        >
          Nombre
        </Input>
        <Input
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
            name="cellphone"
          >
        Telefono
          </Input>
          <Input
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
            name="location"
          >
            Localidad
          </Input>
          <Input
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
            name="address"
          >
            Dirección
          </Input>
        
        <SubmitBtn>
          <Submit disabled={!cartItems.length}>Inicia el Pedido</Submit>
        </SubmitBtn>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  )
}

export default CheckoutForm;