/* eslint-disable react/prop-types */
import { Container } from "./styles";

const ButtonText = ({title, icon: Icon}) => {
  return (
    <Container>
    {Icon && <Icon />}
    {title}
  </Container>
  )
}

export default ButtonText