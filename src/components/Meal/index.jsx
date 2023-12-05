import { Container } from "./styles";
import { api } from "../../services/api";

const Meal = ({
  id,
  title,
  price,
  image,
  meal_amount,
  isNew,
  onClick,
  ...props
}) => {
  return (
    <Container {...props}>
       <img src={`${api}/files/meals/${image}`} alt={`Foto do prato ${title}`} />
      <p>{`${meal_amount}x ${title}`}</p>
      <p>{`R$ ${price}`}</p>
      {isNew && (
        <button type="button" onClick={onClick}>
          Excluir
        </button>
      )}
    </Container>
  );
};

export default Meal;
