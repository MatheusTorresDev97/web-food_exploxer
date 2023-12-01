/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Button = ({
  title,
  isHighlighted = true,
  icon: Icon,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <Container
      type={type}
      isHighlighted={isHighlighted}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
};

export default Button;
