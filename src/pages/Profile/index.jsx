import { IoIosArrowBack } from "react-icons/io";

import { Container, Form } from "./styles";

import  ButtonText  from "../../components/ButtonText";
import  Button  from "../../components/Button";
import  Input  from "../../components/Input";
import  Header  from "../../components/Header";
import  Footer  from "../../components/Footer";

const Profile = () => {
  return (
    <Container>
      <Header />
        <Form>
        <ButtonText title="voltar" icon={IoIosArrowBack} />
        <h1>Meu perfil</h1>
        <Input title="Nome:" type="text" placeholder="" />
        <Input title="E-mail:" type="text" placeholder="" />
        <Input
          title="Senha atual:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Input
          title="Senha nova:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Salvar" type="button" disabled />
        </Form>
        <Footer />
    </Container>
  )
}

export default Profile