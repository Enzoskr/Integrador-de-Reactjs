import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"


import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/Ordenes/CardsOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesTitleStyled,
} from './OrdenesStyles';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/Orders/orderSlice';


const MisOrdenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser)
  const {orders, error} = useSelector(state => state.orders);
  
  useEffect(() => {
    if(!orders) {
      getOrders(dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail())
    } else {
      error && dispatch(clearError())
    }
  }, [currentUser, orders, error, dispatch])

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    
    </>
  );
};

export default MisOrdenes;
