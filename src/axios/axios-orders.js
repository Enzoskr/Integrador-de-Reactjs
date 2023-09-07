import axios from "axios";
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from "../redux/Orders/ordersSlice";
import { BASE_URL } from "../utils";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStart());

  try {
    const orders = await axios.get(`${BASE_URL}orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    console.log(orders);
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);

    dispatch(
      fetchOrdersFail(
        "Algo no salió bien. Sin un usuario registrado, no podemos procesar las órdenes"
      )
    );
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    console.log(error);
    dispatch(createOrderFail());
  }
};
