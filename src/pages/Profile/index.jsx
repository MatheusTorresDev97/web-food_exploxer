/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { Container, Form } from "./styles";

import  ButtonText  from "../../components/ButtonText";
import  Button  from "../../components/Button";
import  Input  from "../../components/Input";
import  Header  from "../../components/Header";
import  Footer  from "../../components/Footer";


const Profile = () => {
  const [name, setName] = useState("Matheus");
  const [email, setEmail] = useState("matheus@email.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <Container>
      <Header />
        <Form>
        <ButtonText title="voltar" icon={IoIosArrowBack} />
        <h1>Meu perfil</h1>
        <Input title="Nome:" type="text" placeholder={name} value={name} />
        <Input title="E-mail:" type="text" placeholder={email} value={email} />
        <Input
          title="Senha atual:"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={oldPassword}
        />
        <Input
          title="Senha nova:"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={newPassword}
        />
        <Button title="Salvar" type="button" disabled />
        </Form>
        <Footer />
    </Container>
  )
}

export default Profile