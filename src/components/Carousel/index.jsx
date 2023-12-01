/* eslint-disable react/prop-types */
import { useRef } from "react";

import Card from "../Card";
import Container from "./styles";

const Carousel = ({ title, meals }) => {
  const carousel = useRef(null);

  function handleCarouselRight(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  function handleCarouselLeft(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="carousel-window">
        <button onClick={handleCarouselLeft}>{"<"}</button>
        <button onClick={handleCarouselRight}>{">"}</button>
        <div className="carousel-meals" ref={carousel}>
          {meals.map((meal) => {
            const { id, title, description, image, price } = meal;

            return (
              <Card
                key={String(id)}
                meal_id={id}
                title={title}
                description={description}
                image={image}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
