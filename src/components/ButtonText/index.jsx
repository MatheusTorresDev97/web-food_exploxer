/* eslint-disable react/prop-types */
import { Container } from "./styles";

const ButtonText = ({title, icon: Icon, to, onClick}) => {
  return (
    <Container to={to} onClick={onClick}>
    {Icon && <Icon />}
    <p>{title}</p>
  </Container>
  )
}

export default ButtonText