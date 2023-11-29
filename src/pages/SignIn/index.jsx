import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Logo from "../../assets/logo.svg";

const SignIn = () => {
  return (
    <Container>
      <Form>
        <div className="top">
          <img src={Logo} alt=" Logo do food explorer" />
          <h1>Food Explorer</h1>
        </div>
        <h2>Faça seu login:</h2>
        <Input title="Nome:" type="text" placeholder="exemplo@exemplo.com.br" />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
      </Form>
    </Container>
  );
};

export default SignIn;
