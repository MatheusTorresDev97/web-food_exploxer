/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Button = ({
  title,
  isHighlighted = true,
  icon: Icon,
  type,
  ...props
}) => {
  return (
    <Container type={type} isHighlighted={isHighlighted} {...props}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
};

export default Button;
