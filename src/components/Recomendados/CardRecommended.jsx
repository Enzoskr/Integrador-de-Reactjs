import React from "react";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  InfoCard,
  CardPrice,
} from "./CardsRecommendedStyled";
import { AddToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CardRecommended = ({ id, title, img, price, desc }) => {
  const dispatch = useDispatch(AddToCart);

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => dispatch(AddToCart({ id, img, title, desc, price }))}
      >
        Añadir
      </Button>
    </Card>
  );
};

export default CardRecommended;
