import React, { useRef, useState } from "react";
import CardRecommended from "./CardRecommended";
import { CardsContainer } from "./CardsRecommendedStyled";
import { useSelector } from "react-redux";

const CardsRecommended = () => {
  const recommended = useSelector((state) => state.recommended.recommended);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Evita selecciones no deseadas
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajustar la velocidad de arrastre
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Asegurar que el movimiento se detiene incluso si el cursor sale del contenedor
  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <CardsContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {recommended.map((recomendado) => (
        <CardRecommended {...recomendado} key={recomendado.id} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecommended;
