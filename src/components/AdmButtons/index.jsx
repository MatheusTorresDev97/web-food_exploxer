/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiEdit2, FiTrash } from "react-icons/fi";

import { Container } from "./styles";
import  Button  from "../Button";

const AdmButtons = ({ meal_id }) => {
  return (
    <Container>
      <Button icon={FiEdit2} title="Editar" isHighlighted={false} />
      <Button icon={FiTrash} title="Excluir" />
    </Container>
  )
}

export default AdmButtons