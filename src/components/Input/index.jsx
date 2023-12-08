import { Container } from "./styles";
import { IMaskInput } from "react-imask";

const Input = ({ title, type, placeholder, value, onChange, onKeyPress, ...props }) => {
  return (
    <Container className="my-input">
      <p>{title}</p>

      <IMaskInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...props}
      />
    </Container>
  );
};

export default Input;
