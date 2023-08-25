import React from 'react'
import { CategoriesCard, CategoriesImg  } from './CategoriesStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'


export const Category = ( {title, img, Category} ) => {

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.categories.selectedCategory)

  return (
    <CategoriesCard 
      selected= {Category === selectedCategory}
      onClick={() => dispatch(selectCategory(Category))}
      whileTap={{ scale: 0.9 }}>
      <CategoriesImg src={img} alt={Category} />
      <h3>{title}</h3> 
    </CategoriesCard>

  )
  
}

export default Category