/* eslint-disable react/prop-types */
import { Container } from "./styles";

const ButtonText = ({title, icon: Icon}) => {
  return (
    <Container>
    {Icon && <Icon />}
    <p>{title}</p>
  </Container>
  )
}

export default ButtonText