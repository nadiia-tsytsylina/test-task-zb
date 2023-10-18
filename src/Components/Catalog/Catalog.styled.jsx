import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 40px;

  @media (min-width: 834px) {
    padding: 40px 60px;
  }

  @media (min-width: 1440px) {
    padding: 50px 80px;
  }
`;

export const Title = styled.h2`
  color: var(--bronze);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
