import { Container } from "./styles";

import  Wrapper  from "../Wrapper";
import DiscreetLogo from "../../assets/discreet-logo.svg";

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <div className="brand">
            <img src={DiscreetLogo} alt="Foto do logotipo" />
            <h3>Food Explorer</h3>
            </div>
            <p>&copy; 2023 - Todos os direitos reservados</p>
        </Wrapper>
    </Container>
  )
}

export default Footer