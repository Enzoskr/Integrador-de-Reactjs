import React from "react";
import Button from "../UI/Button/Button";
import {
  CardPrice,
  ContainerPrice,
  ProductsCard,
  ContainerInfo,
  SizeAndBrand,
} from "./ProductsCardStyles";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/cart/cartSlice";

const ProductCard = ({ id, img, title, desc, price, Size }) => {
  const dispatch = useDispatch();

  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <ContainerInfo>
        <h3>{title}</h3>
        <SizeAndBrand>
          <p>{desc}</p>
          <a>Talle: {Size}</a>
        </SizeAndBrand>
      </ContainerInfo>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button
          onClick={() =>
            dispatch(AddToCart({ id, img, title, desc, price, Size }))
          }
        >
          Añadir
        </Button>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default ProductCard;
