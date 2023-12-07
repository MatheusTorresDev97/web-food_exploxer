/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange, onClick, ...props }) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        value={value}
        onChange={onChange}
        {...props}
      />
       <button onClick={onClick}>
        <FiSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
