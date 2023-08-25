import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriesWrapper = styled.div`
display: flex;
flex-direction: column;


@media (max-width: 768px)
{
    padding-top:20px;
    text-align: center;
}
`
export const CategoriesContainer= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 12px 20px;`

export const CategoriesCard = styled(motion.div)`
/* background-color: var(--colorLogo1); */
display: flex;
flex-direction: row;
align-items: center;
height: 20px;
padding: 0 4px;

border-radius: 6px;
cursor: pointer;
h3{
    font-size: 14px;
}
background-color: ${({selected}) => selected ? 'var(--colorLogo2)' : 'var(--colorLogo1)'};;
`
export const CategoriesImg = styled.img`

height: 90%;
margin: 0 3px;
`