import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    
    color: var(--text-color-black);
    @media(max-width: 768px){
        text-align: center;
    }
`;

export const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 15px;
max-width: 1200px;
margin: 0 auto;


`

export const ProductsCard = styled.div`
background: var(--color-cards);
padding: 20px;
width: 300px;
height: 400px;

border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 20px;
gap: 20px;

box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
transition: all 0.3s ease-in-out;

img{
    
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 10px;
    margin: 0 auto;
    padding-bottom: 10px;



}


p{
    color: var(--ColorLogo1);
    font-size: 12px;

}
@media (max-width: 768px){
    width: 250px;
    text-align: center;

}
`
export const ContainerPrice = styled.div`
display: flex;
justify-content: space-between;
`
export const CardPrice = styled.div`
font-weight: 800;
font-size: 18px;
color: var(--colorLogo1);
`

export const ContainerInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start; 
flex-direction: column;
padding: 0 10px;
height: 100%;

`