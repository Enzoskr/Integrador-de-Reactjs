import { useNavigate } from "react-router-dom";

import Button from "../../components/UI/Button/Button";

import {
  ContainerInfoStyled,
  TextStyled,
  // TitleStyled,
} from "./FelicitacionesStyles";

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src="https://cdn.memegenerator.es/imagenes/memes/full/1/27/1272150.jpg"
          alt=""
        />
        <ContainerInfoStyled>
          {/* <h2>haz click para ver tu order</h2> */}
        </ContainerInfoStyled>
        <Button onClick={() => navigate("/Ordenes")}>Tu Orden</Button>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;
