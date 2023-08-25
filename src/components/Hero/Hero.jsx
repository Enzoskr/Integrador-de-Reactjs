 
import React, { useState } from 'react';

import {useDispatch, useSelector} from 'react-redux'


import Button from '../UI/Button/Button'

import {
  ContainerSearch,
  HeroContainer,
  HeroTagline,
  SearchText,
  SearchBar,
  
  SearchAndButton,
 } from './HeroStyles'

 import {selectCategory} from "../../redux/categories/categoriesSlice"

const Hero = ({doScroll}) => {
  
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const listOfCategories = useSelector((state) => state.categories.categories).map((category) => {
    return category.Category
    });

  const handlerSubmit = (e) => {
    e.preventDefault();
    
  const newCategory = value.trim().toLowerCase().split(" ").join("");

  const selectedCategory = listOfCategories.find((category) => {
    return category.toLowerCase() === newCategory
  });
  

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory))
      doScroll(doScroll);
    } else {
      return alert("No se encontraron productos")
    }
    
    setValue("")
  }

  return (
    <HeroContainer >
      <HeroTagline>Inspiración natural, estilo excepcional</HeroTagline>
        <ContainerSearch>
          <SearchText>¿Qué estás buscando?</SearchText>
          <SearchAndButton>
          <SearchBar 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Ej. hoddies, remeras,etc" />
         
          <Button onClick={e => handlerSubmit(e)} radius='10' disabled={!value}>      
            Buscar
          </Button> 
          </SearchAndButton>
        </ContainerSearch>
  </HeroContainer>
  )
}

export default Hero;