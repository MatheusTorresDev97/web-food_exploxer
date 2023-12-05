import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <div className="circle"></div>
      <p className="loading">Carregando...</p>
      <p className="just-moment">Só mais um momento...</p>
    </Container>
  );
};

export default Loading;
