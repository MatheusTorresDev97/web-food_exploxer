import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > .my-wrapper {
    flex-grow: 1;
  }
  `

export const Form = styled.div`
  width: 100%;
  padding: clamp(20px, 6vw, 40px) 0;
`

export const Ingredients = styled.div`
  width: 100%;
  margin-bottom: 20px;
  > p {
    margin-bottom: clamp(5px, 2vw, 10px);
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
  .new-ingredients {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    display: flex;

    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin-bottom: 10px;
  > p {
    margin-bottom: clamp(5px, 2vw, 10px);
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    resize: none;
    min-height: 170px;
  }
`;