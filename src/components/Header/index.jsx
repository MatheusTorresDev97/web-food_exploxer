import { useState } from "react";
import Wrapper from "../Wrapper";
import { Container, Mobile, Brand, HamburgerMenu, Navigation } from "./styles";
import SearchBar from "../SearchBar";
import Logo from "../../assets/logo.svg";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import { TfiReceipt } from "react-icons/tfi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Wrapper>
        <Mobile>
          <div className="top">
            <Brand>
              <img src={Logo} alt="Foto do logotipo food explorer" />
              <h2>Food Explorer</h2>
            </Brand>
            <HamburgerMenu onClick={handleMenuOpen}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </HamburgerMenu>
          </div>
          <Navigation>
            <ul className={menuOpen ? "" : "hidden"}>
              <li>
                <SearchBar icon={FiSearch} />
              </li>
              <li>
                <a href="#">
                  <FiHeart />
                  Favoritos
                </a>
              </li>
              <li>
                <a href="#">
                  <FiShoppingCart />
                  Carrinho
                </a>
              </li>
              <li>
                <a href="#">
                  <TfiReceipt />
                  Pedidos
                </a>
              </li>
              <li>
                <a href="#">
                  <FiUser />
                  Perfil
                </a>
              </li>
              <li>
                <a href="#">
                  <FiLogOut />
                  Sair
                </a>
              </li>
            </ul>
          </Navigation>
        </Mobile>
      </Wrapper>
    </Container>
  );
};

export default Header;
