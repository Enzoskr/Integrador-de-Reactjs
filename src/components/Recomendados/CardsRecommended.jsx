  import React from 'react'
  import CardRecommended from './CardRecommended'


  import { CardsContainer } from './CardsRecommendedStyled'
  import { useSelector } from 'react-redux';




  const CardsRecommended = () => {
    
    const recommended = useSelector(state => state.recommended.recommended)

    return (
      <CardsContainer gridlength={recommended.length}>
        {
          recommended.map((recomendado) => {
            return <CardRecommended {...recomendado} key={recomendado.id} />
          })
        }
      </CardsContainer>
    )
  }

  export default CardsRecommended