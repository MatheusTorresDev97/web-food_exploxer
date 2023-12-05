import { Container, Form, Brand } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateDataToSignIn } from "../../utils/dataValidator";
import { useRequest } from "../../hooks/useRequest";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { manageRequests } = useRequest();
  const navigate = useNavigate();
  const { authenticateUser } = useAuth();

  async function handleSignIn() {
    const allInputIsValid = validateDataToSignIn({ email, password });

    if (!allInputIsValid) {
      return;
    }

    const response = await manageRequests("post", "sessions", {
      email,
      password,
      isPasswordRequired: true,
    });

    if (response instanceof Error) {
      return navigate("/off-air");
    }

    const theResultWasASuccess = Object.prototype.hasOwnProperty.call(response.data, "user");

    if (!theResultWasASuccess) {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("Não foi possível logar. Por favor tente novamente mais tarde.");
      }

      return;
    }

    const { user, token } = response.data;
    navigate("/");

    authenticateUser({ user, token });
  }

  return (
    <Container>
      <Brand>
        <img src={Logo} alt=" Logo do food explorer" />
        <h1>food explorer</h1>
      </Brand>
      <Form>
        <div className="top">
          <img src={Logo} alt=" Logo do food explorer" />
        </div>
        <h2>Faça seu login:</h2>
        <Input
          title="Nome:"
          type="text"
          placeholder="exemplo@exemplo.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Entrar"
          type="button"
          isHighlighted
          onClick={handleSignIn}
        />
        <ButtonText title="Criar uma conta" to="/register" />
      </Form>
    </Container>
  );
};

export default SignIn;
