import { styled } from "styled-components";
import PhotoBg from '../../assets/Patagloria.jpg'

export const HeroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

background-image : url(${PhotoBg});
width: 100%;
height: 700px;
background-position: center;
background-size: cover;
background-attachment: local;
@media (max-width: 768px){
    
    
}
img{
    width: 100%;
    height: 100%;
    object-fit: contain;

}
`
export const HeroTagline = styled.h1`
font-family: 'Playfair Display', serif;
margin-top: 100PX;
font-size: 90px;

text-align: center;
font-weight: 600;
color: var(--Gris);
text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
@media (max-width: 768px){
    display: flex;
    font-size: 50px;
    margin-top: 90px;
}
`

export const ContainerSearch = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 50px;


`
export const SearchBar = styled.input`
background-color: var(--primary-color);
border-radius: 10px;
border: none;
outline: none;
box-shadow: 4px 4px 2px rgba(0,0,0,0.6);
color: black;
@media (max-width: 768px){
    padding: 10px;
}

`

export const SearchText = styled.h4`

font-family: 'Playfair Display', serif;
font-size: 18px;
font-weight: 600;
color: var(--Gris);
text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
text-align: center;
@media (max-width: 768px){
    display: flex;
    font-size: 15px;
    margin-top: 90px;
}

`

export const IconStyles = styled.div`
position: absolute;
top:12px;
left: 12px;
font-size: 14px;




`

export const SearchAndButton = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap:20px;
@media (max-width: 768px){
    justify-content: flex-start;
}
`



