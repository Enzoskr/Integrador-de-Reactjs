import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyles';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://cdn.memegenerator.es/imagenes/memes/full/1/27/1272150.jpg'
          alt=''
        />
        <ContainerInfoStyled>
          
          <h2>Tu pedido fue realizado</h2>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/Ordenes')}>Volver</Button>
      </TextStyled>

    </div>
  );
};

export default Felicitaciones;
