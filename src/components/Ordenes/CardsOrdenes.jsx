import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardOrdenes';
import { MisOrdenesContainerStyled } from './CardsOrdenesStyles';

import Charger from "../UI/Charger/Charger";

const CardsMisOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders);

  if (loading && !orders){ 
    return <Charger styles={{ height: '50px', width: '50px' }} />
  };

  if (error) {
    return <h3 style={{ textAlign: 'center' }} > {error} </h3>
  }

  return (
    <MisOrdenesContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <CardMisOrdenes {...order}key={order._id} />
          })
        ) : (
          <h2>Haz tu primer pedido</h2>
        )
      }
     
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
