import React from "react";
import Button from "../UI/Button/Button";
import {
  CardPrice,
  ContainerPrice,
  ProductsCard,
  ContainerInfo,
} from "./ProductsCardStyles";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/cart/cartSlice";

const ProductCard = ({ id, img, title, desc, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <ContainerInfo>
        <h3>{title}</h3>
        <p>{desc}</p>
      </ContainerInfo>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button
          onClick={() => dispatch(AddToCart({ id, img, title, desc, price }))}
        >
          Add
        </Button>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default ProductCard;
