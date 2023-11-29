/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Input = ({ title, type, placeholder, ...props }) => {
  return (
    <Container>
      <p>{title}</p>

      <input type={type} placeholder={placeholder} {...props} />
    </Container>
  );
};

export default Input;
