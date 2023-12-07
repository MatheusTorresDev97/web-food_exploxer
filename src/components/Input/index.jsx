/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Input = ({ title, type, placeholder, value, onChange, onKeyPress, ...props }) => {
  return (
    <Container className="my-input">
      <p>{title}</p>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress
        {...props}
      />
    </Container>
  );
};

export default Input;
