/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { Container, Form } from "./styles";

import ButtonText from "../../components/ButtonText";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

import  Loading  from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";
import { useRequest } from "../../hooks/useRequest";
import { validateDataToProfile } from "../../utils/dataValidator";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const { userInfos } = useAuth();
  const { manageRequests } = useRequest();

  async function handleUpdateInfos() {
    const areAllEntriesValid = validateDataToProfile({
      name,
      email,
      oldPassword,
      newPassword,
    });

    if (!areAllEntriesValid) return;

    setShowLoadingScreen((prevState) => !prevState);

    const response = await manageRequests("put", "/users", {
      name,
      email,
      old_password: oldPassword,
      new_password: newPassword,
    });

    setShowLoadingScreen((prevState) => !prevState);


    const updatedSuccessfully = response.status === 201;

    if (updatedSuccessfully) {
      return alert("Informações atualizadas com sucesso!");
    }

    if (response.data) {
      return alert(response.data.message);
    } else {
      return alert(
        "Não foi possível atualizar os dados. Por favor tente novamente mais tarde."
      );
    }
  }

  useEffect(() => {
    setName(userInfos.name);

    setEmail(userInfos.email);
  }, [userInfos.email, userInfos.name]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Form>
          <ButtonText title="voltar" icon={IoIosArrowBack} to="/" />
          <h1>Meu perfil</h1>
          <Input
            title="Nome:"
            type="text"
            placeholder={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="E-mail:"
            type="text"
            placeholder={email}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            title="Senha atual:"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input
            title="Senha nova:"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        <Button title="Salvar" type="button" onClick={handleUpdateInfos} />
        </Form>
      </Wrapper>
      <Footer />
      {showLoadingScreen && <Loading />}
    </Container>
  );
};

export default Profile;
