/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Wrapper = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Wrapper