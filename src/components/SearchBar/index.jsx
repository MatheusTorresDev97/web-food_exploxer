/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ ...props }) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        {...props}
      />
      <button>
        <FiSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
