import styled,{css} from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



// header y todo lo que contiene el header
export const  NavbarContainerStyled = styled.header`
background-color: var(--primary-color);
height: 48px;
position: fixed;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.12);

img{
    align-items: center;
    width: 150px;
    height: auto;
    cursor: pointer;
}


`
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

// contenedor de los icons y sus palabras
export const LinksContainerStyled = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
font-size: 18px;
a{
    padding: 0px 10px;
    cursor: pointer;
    color: black;
    
}
a:hover{
    text-decoration: 10px underline var(--colorLogo1)
}
a:first-child{
    text-decoration: underline 1px var(--colorLogo1);
    display: flex;
    align-items: center;
    gap: 5px;

}

`
// imagen
export const LogoContainer = styled.img`
align-items: center;
width: 150px;
height: auto;
cursor: pointer;
`

export const LinkContainerStyled = styled.div`
font-size:18px;
padding-right: 20px;

align-items: center;
a{
    padding: 0px 10px;
    cursor: pointer;
    color: black;
}
`
export const CartNavStyled = styled.div`
position: relative;
cursor: pointer;
span{
    position: fixed;
    top: 4px;
    right: 9px;
    height: 13px;
    width: 12px;
    border: 1px solid white;
    text-align: center;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 12px;
    
}
`

export const ContainerStyled = styled(LinkContainerStyled)`
display: flex;

@media(max-width: 768px){
    display: none;
}`

export const MenuContainerStyled = styled( LinkContainerStyled)`
display: none;
cursor: pointer;
@media(max-width: 768px ){
    display: flex;

}
`
export const ListNavbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



`


export const UlNavbar = styled.ul`
display: flex;
flex-direction: row;
padding: 0 10px;
gap: 10px;

list-style: none;
a{
    cursor: pointer;
}
a:hover{
    text-decoration: underline 1.5px solid gray;
    
}

`

export const LiNavbar = styled.li`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
a{
    cursor: pointer;
}
a:hover{
    text-decoration: underline 1.5px solid gray;
}
`
export const SearchContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
`

export const SearchIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
cursor: pointer;
`
export const UserNavStyled = styled.div`
gap: 10px;
cursor: pointer;
span{
    color: black;
    font-size: 16px;
    font-weight: 600;
}
::first-letter{
    text-transform: uppercase;
}
`
export const UserContainerStyled = styled(LinkContainerStyled)`
height: 15px;
gap: 12px;
display: flex;
align-items: center;
background-color: var(--Gris);
padding: 1rem;


span{}
`;

export const SpanStyled = styled.span`
&:hover{
    text-decoration: underline 1px solid black;
}

`