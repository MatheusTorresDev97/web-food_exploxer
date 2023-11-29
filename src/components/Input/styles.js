import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;
    text-align: left;

    > input {
        background-color: transparent;
        width: 100%;

        margin-top: 10px;
        padding: 15px;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 5px;
        outline: none;
    }
`