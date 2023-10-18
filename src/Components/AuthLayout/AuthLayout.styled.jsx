import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 80px;
  flex-direction: column;

  @media (min-width: 834px) {
    height: 92.5vh;
    flex-direction: row;
    gap: 80px;
  }

  @media (min-width: 1440px) {
    gap: 100px;
    height: 92.5vh;
    padding-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 834px) {
    width: 50%;
    height: 100%;
  }

  @media (min-width: 1440px) {
    width: 62%;
  }
`;

export const Title = styled.h2`
  color: var(--dark-blue);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  margin-bottom: 20px;
`;
