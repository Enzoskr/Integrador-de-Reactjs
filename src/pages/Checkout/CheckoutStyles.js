import { styled } from "styled-components";

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5rem 5rem;
  @media (max-width: 768px) {
    padding: 3rem 0rem;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`;
