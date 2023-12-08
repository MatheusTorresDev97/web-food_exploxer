import { FiEdit2, FiTrash } from "react-icons/fi";

import { Container } from "./styles";
import Button from "../Button";

import { useAdmButtons } from './useAdmButtons';

const AdmButtons = ({ meal_id }) => {
  const { handleDeleteMeal, handleEditMeal } = useAdmButtons({ meal_id });
  return (
    <Container>
      <Button
        icon={FiEdit2}
        title="Editar"
        isHighlighted={false}
        onClick={handleEditMeal}
      />
      <Button
        icon={FiTrash}
        title="Excluir"
        onClick={handleDeleteMeal}
      />
    </Container>
  )
}

export default AdmButtons