/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Section = ({ children, title }) => {
  return (
    <Container className="my-section">
      <h2>{title}</h2>
      <div className="items-section">{children}</div>
    </Container>
  );
};

export default Section;
