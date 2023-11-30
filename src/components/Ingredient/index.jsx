/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Ingredient = ({image, name}) => {
  return (
    <Container>
    <img src={image} alt={`Foto do ingrediente ${name}`} />
    <p>{name}</p>
  </Container>
  )
}

export default Ingredient