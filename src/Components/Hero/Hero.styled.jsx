import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroBackground from "../../Assets/Images/main-background.jpg";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-blue);
  color: var(--white-text);
  background-image: linear-gradient(
      to right,
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 93vh;
  text-align: center;
  padding: 0 40px;

  @media (min-width: 834px) {
    padding: 0 60px;
  }

  @media (min-width: 1440px) {
    padding: 0 80px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 10px;

  @media (min-width: 834px) {
    font-size: 52px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.7;
  border-radius: 8px;
  border: 1px solid var(--white-text);
  color: inherit;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  width: 120px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 834px) {
    padding: 10px 24px;
    font-size: 20px;
    width: 165px;
  }
`;
