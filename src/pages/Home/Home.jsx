import React, { useRef } from "react";
import Hero from "../../components/Hero/Hero";

import Categorias from "../../components/Categorias/Categorias";
import ProductsCard from "../../components/Products/ProductsCard";
import CardsRecommended from "../../components/Recomendados/CardsRecommended";

import {
  HomeWrapper,
  CategoriasWrapper,
  ProductosWrapper,
  RecommendedWrapper,
} from "./HomeStyles";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function Home() {
  //const navigate = useNavigate();
  //const currentUser = useSelector((state) => state.user.currentUser);

  const productsRef = useRef();
  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      {/* hero section */}

      <Hero doScroll={doScroll} />
      {/* section Recommendados */}
      <RecommendedWrapper>
        <h2>Recomendados</h2>
        <CardsRecommended />
      </RecommendedWrapper>

      {/* sectionCategorias */}
      <CategoriasWrapper>
        <h2>Categorias</h2>

        <Categorias />
      </CategoriasWrapper>
      {/* section Productos */}
      <ProductosWrapper ref={productsRef}>
        <h2>Nuestros productos</h2>
        <ProductsCard />
      </ProductosWrapper>

      {/* section login */}
    </HomeWrapper>
  );
}

export default Home;
