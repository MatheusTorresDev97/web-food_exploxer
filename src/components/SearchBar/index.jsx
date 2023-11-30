/* eslint-disable react/prop-types */
import { Container } from "./styles";

const SearchBar = ({ icon: Icon, ...props }) => {
  return (
    <Container>
         <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        {...props}
      />
      {Icon && (
        <button>
          <Icon />
        </button>
      )}
    </Container>
  )
}

export default SearchBar