import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }
`;