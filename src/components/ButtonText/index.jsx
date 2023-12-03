/* eslint-disable react/prop-types */
import { Container } from "./styles";

const ButtonText = ({title, icon: Icon, to}) => {
  return (
    <Container to={to}>
    {Icon && <Icon />}
    <p>{title}</p>
  </Container>
  )
}

export default ButtonText