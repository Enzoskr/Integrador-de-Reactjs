import styled from "styled-components";

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  img {
    width: 90%;
    margin: 1 1 auto;
    margin-bottom: 10px;
  }
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & h1 {
    margin-bottom: 50px;
    color: var(--text-color-black);
  }
`;
