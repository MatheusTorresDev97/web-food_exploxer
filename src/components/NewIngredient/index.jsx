/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

const NewIngredient = ({ isNew, value }) => {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <>
          <input type="text" placeholder={isNew && "Adicionar"}/>
          <button type="button">
            <FiPlus />
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button type="button">
            <FiX />
          </button>
        </>
      )}
    </Container>
  );
};

export default NewIngredient;
