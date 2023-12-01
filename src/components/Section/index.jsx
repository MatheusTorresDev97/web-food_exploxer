/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Section = ({ children, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default Section;
