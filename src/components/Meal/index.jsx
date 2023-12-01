/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Meal = ({ id,
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
      <img
        src={`https://images.pexels.com/${image}`}
        alt={`Foto do prato ${title}`}
      />
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
