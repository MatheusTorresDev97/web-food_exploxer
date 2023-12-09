import { Container, Input, ButtonSearch } from './styles';
import { FiSearch } from "react-icons/fi";
import { useSearchBar } from './useSearchBar';


const SearchBar = () => {
  const { handleSearch } = useSearchBar();

  return (
     <Container onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Busque pelas opções de pratos"
        id="userSearch"
      />

      <ButtonSearch>
        <FiSearch />
      </ButtonSearch>
    </Container>
  );
};

export default SearchBar;
