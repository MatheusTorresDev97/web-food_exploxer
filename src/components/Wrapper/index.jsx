/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Wrapper = ({children}) => {
  return (
    <Container className="my-wrapper">{children}</Container>
  )
}

export default Wrapper