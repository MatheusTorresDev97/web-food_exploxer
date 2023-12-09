import { Container, Desktop, Mobile } from "./styles";
import { useHome } from './useHome';
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import Food from "../../assets/food.png";

const Home = () => {
  const { organizedMeals, categories, renderCardsMobile, renderCardsDesktop } =
  useHome();


  return (
    <Container>
      <Header />
      <Wrapper>
        <Mobile>
          <div className="top-mobile">
            <img
              src={Food}
              alt="Imagem de comida"
            />
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsMobile()}
        </Mobile>
        <Desktop>
          <div className="top-desktop">
            <img
              src={Food}
              alt="Imagem de comida"
            />
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
          {renderCardsDesktop()}
        </Desktop>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Home;
