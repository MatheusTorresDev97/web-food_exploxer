import { Container } from "./styles";

import { FiUpload } from "react-icons/fi";

const InputImage = ({ isAMeal, onChange, ...props }) => {
  return (
    <Container>
      <p>Imagem do {isAMeal ? 'prato' : 'ingrediente'}</p>
      <label>
        <FiUpload />
        <p>Selecione imagem</p>
        <input type="file" accept="image/png, image/jpeg" onChange={onChange} {...props} />
      </label>
    </Container>
  );
};

export default InputImage;
