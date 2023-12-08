import { Container, Form, Ingredients, Description, Modal } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FiX } from "react-icons/fi";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import NewIngredient from "../../components/NewIngredient";
import ButtonText from "../../components/ButtonText";
import InputImage from "../../components/InputImage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import  Loading  from "../../components/Loading";
import { useNew } from './useNew';

const New = () => {
  const {
    modalOpen,
    category,
    setCategory,
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    newIngredient,
    setNewIngredient,
    newIngredientPhoto,
    setNewIngredientPhoto,
    ingredientsOfThisMeal,
    ingredientsRegisteredInDB,
    handleModal,
    handleAddNewIngredient,
    handleRegisterMeal,
    handleRegisterIngredient,
  } = useNew();

  if (!ingredientsRegisteredInDB) {
    return <Loading />;
  }


  return (
    <Container>
      <Header />
      <Wrapper>
        <Form>
          <ButtonText
            title="voltar"
            icon={IoIosArrowBack}
            to="/"
          />
          <h1>Adicionar Prato</h1>
          <InputImage />
          <Input
            title="Nome"
            placeholder="Ex.: Salada Ceasar"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            title="Categoria"
            placeholder="Ex.: Prato Principal"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <Ingredients>
            <p>Ingredientes</p>
            <div className="new-ingredients">
              {ingredientsOfThisMeal.map(ingredient => (
                <NewIngredient
                key={ingredient}
                value={ingredient}
                />
                ))}
                <NewIngredient
                  isNew
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddNewIngredient}
                />
              </div>
            </Ingredients>
            <Input
            title="Preço"
            placeholder="R$ 00,00"
            type="text"
            mask="R$ 00,00"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <Description>
            <p>Descrição</p>
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </Description>
          <Button
            title="Adicionar prato"
            isHighlighted={false}
            onClick={handleRegisterMeal}
          />
        </Form>
      </Wrapper>
      <Footer />
      <Modal className={modalOpen ? 'open' : 'close'}>
        <div className="alert">
          <button
            type="button"
            onClick={handleModal}
          >
            <FiX />
          </button>
          <h2>Ingrediente Novo!</h2>
          <p>
            Identificamos que você adicionou um Ingrediente novo. Gostaria de
            adicionar uma foto à ele?
          </p>
          <Input
            title="Nome"
            placeholder="Ex.: Sal"
            value={newIngredient}
            onChange={e => setNewIngredient(e.target.value)}
          />
          <InputImage
            isAMeal={false}
            onChange={e => setNewIngredientPhoto(e.target.files[0])}
          />
          <Button
            title="Cadastrar sem foto"
            isHighlighted={false}
            onClick={() => handleRegisterIngredient(false)}
            />
            <Button
              title="Cadastrar com foto"
              onClick={() => handleRegisterIngredient(true)}
          />
        </div>
      </Modal>
    </Container>
  );
};

export default New;
