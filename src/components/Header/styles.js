import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const Desktop = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 780px) {
    display: none;
  }
  nav {
    flex-grow: 1;
    ul {
      flex-grow: 1;
      display: flex;
      gap: 20px;
      align-items: center;
    }
    li:first-child {
      flex-grow: 1;
    }
    li {
      list-style: none;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2rem;
    }
  }
`;

export const Mobile = styled.div`
  .top {
    display: flex;
    justify-content: flex-end;

    @media (min-width: 370px) {
      justify-content: space-between;
    }

    @media (min-width: 780px) {
      display: none;
    }
  }
`;


export const Brand = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 370px) {
    display: none;
  }

  img {
    width: 35px;
    height: 35px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
  }
`;


export const HamburgerMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.5rem;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    transition: all 0.5s;
    max-height: 1000px;

    &.hidden {
      max-height: 0;
    }

    @media (min-width: 780px) {
      display: none;
    }
  }

  li:first-child {
    margin-top: 20px;
  }

  li {
    list-style: none;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
  }
`;