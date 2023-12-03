/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Button = ({
  title,
  onClick,
  isHighlighted = true,
  icon: Icon,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <Container
      onClick={onClick}
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
