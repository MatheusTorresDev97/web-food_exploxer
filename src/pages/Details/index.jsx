/* eslint-disable no-unused-vars */
import { IoIosArrowBack } from "react-icons/io";
import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import ButtonText from "../../components/ButtonText";
import Ingredient from "../../components/Ingredient";
import Loading from "../../components/Loading";
import AdmButtons from "../../components/AdmButtons";
import ClientButtons from "../../components/ClientButtons";
import { useRequest } from "../../hooks/useRequest";
import { api } from "../../services/api";
import { handleImageRequest } from '../../utils/helpers';
import { useAuth } from "../../hooks/useAuth";

const ingredientImage =
  "https://www.foodbusinessnews.net/ext/resources/TopicLandingPages/Product-Development-Ingredient-Applications.jpg?1519144948";

const Details = () => {
  const { userInfos } = useAuth();

  const [mealInfos, setMealInfos] = useState();
  const [mealImage, setMealImage] = useState();

  const { manageRequests } = useRequest();

  const { id } = useParams();
  const navigate = useNavigate();

  function renderIngredients() {
    return mealInfos.ingredients.map((ingredient) => {
      const { id, name, image } = ingredient;

      return <Ingredient image={image} name={name} key={String(id)} />;
    });
  }

  function renderManipulationButtons() {
    if (!userInfos || !userInfos.isAdm) {
      const { meal_id, title, price, image } = mealInfos;

      return (
        <ClientButtons
          meal_id={meal_id}
          title={title}
          price={price}
          image={image}
          withIcon
        />
      );
    } else {
      // eslint-disable-next-line no-undef
      return <AdmButtons meal_id={meal_id} />;
    }
  }

  async function renderImage() {
    if (!mealInfos) return;

    const url = `${api.defaults.baseURL}/files/meals/${mealInfos.image}`;

    handleImageRequest({ url, setState: setMealImage });
  }

  useEffect(() => {
    renderImage();
  }, [mealInfos]);

  useEffect(() => {
    async function fetchMealInfos() {
      const response = await manageRequests("get", `/meals/${id}`);

      if (response instanceof Error) {
        return navigate("/");
      }

      const theRequestWasSuccessful = response.status === 201;

      if (theRequestWasSuccessful) {
        return setMealInfos(response.data);
      }

      if (response.data) {
        alert(response.data.message);
      } else {
        alert(
          "Não foi possível carregar as informações! Por favor tente novamente mais tarde."
        );
      }

      return navigate("/");
    }

    fetchMealInfos();
  }, [id, manageRequests, navigate]);

  return (
    <Container>
      <Header />
      <Wrapper>
        {mealInfos ? (
          <Content>
            <ButtonText title="voltar" icon={IoIosArrowBack} to="/" />
            <img
               src={mealImage}
              alt={`Foto do item ${mealInfos.title}`}
            />
            <h1>{mealInfos.title}</h1>
            <p>{mealInfos.description}</p>
            <div className="ingredients">
              {mealInfos.ingredients && renderIngredients()}
            </div>
            <p className="price">
              R$ <span>{mealInfos.price}</span>
            </p>
            <div className="buttons">{renderManipulationButtons()}</div>
          </Content>
        ) : (
          <Loading />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Details;
