import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { handleImageRequest } from '../../utils/helpers';

const Meal = ({
  title,
  price,
  image,
  meal_amount,
  isNew,
  onClick,
  ...props
}) => {

  const [mealImage, setMealImage] = useState();

  async function renderImage() {
    const url = `${api.defaults.baseURL}/files/meals/${image}`;

    handleImageRequest({ url, setState: setMealImage });
  }

  useEffect(() => {
    renderImage();
  }, []);

  return (
    <Container {...props}>
      <img
         src={mealImage}
        alt={`Foto do prato ${title}`}
        data-oi="oi"
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
