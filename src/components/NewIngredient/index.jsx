/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

const NewIngredient = ({ onClick, onChange, isNew, value, ...props }) => {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <>
             <input
            type="text"
            placeholder={isNew && "Adicionar"}
            value={value}
            onChange={onChange}
            {...props}
          />
           <button type="button" onClick={onClick}>
            <FiPlus />
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button type="button" onClick={onClick}>
            <FiX />
          </button>
        </>
      )}
    </Container>
  );
};

export default NewIngredient;
