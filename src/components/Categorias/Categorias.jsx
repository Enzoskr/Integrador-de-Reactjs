import React from 'react'

import { CategoriesContainer, CategoriesWrapper } from './CategoriesStyles'

import Category from './Category';
import { useSelector } from 'react-redux';

const Categories = () => {

  const categories = useSelector((state) => state.categories.categories);


  return (
  <CategoriesWrapper>
    
    <CategoriesContainer>
      {
        categories.map((category) => {
        return <Category 
        key={category.id}
        {...category}
        />
        })
      }
    </CategoriesContainer>
 </CategoriesWrapper>
  )
}
export default Categories
