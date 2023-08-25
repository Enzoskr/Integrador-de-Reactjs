import ProductCard from './ProductCard'
import { ProductsContainer } from './ProductsCardStyles'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { INITIAL_LIMIT } from '../../utils'
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles'
import Button from '../UI/Button/Button'




const ProductsCard = () => {

  const [limit, setLimit] = useState(INITIAL_LIMIT)
  

  let products = useSelector(state => state.products.products)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)
  const totalProducts = useSelector((state) => state.products.totalProducts)
  
  if(selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory]
    }
  }

  return (
    <>
      <ProductsContainer>
        {
          Object.entries(products).map(([,foods]) => {
            return foods.map((food) => {
              if (limit >= food.id || selectedCategory){
                return <ProductCard {...food} key={food.id} />
              }
              return null
              
            })
          })
        }
      </ProductsContainer>
      {
        !selectedCategory && (
          <ButtonContainerStyled>
        <Button
          onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
          secondary='true'
          disabled={INITIAL_LIMIT === limit}
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={() =>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>
          Ver más
        </Button>
      </ButtonContainerStyled>
        )
      }



      
    </>
  )
}

export default ProductsCard