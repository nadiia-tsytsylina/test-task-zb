import styled from "styled-components";

export const DealItem = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 20px 14px;
  color: var(--white-text);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  border-radius: 5px;

  @media (min-width: 834px) {
    width: 345px;
    height: 400px;
  }

  @media (min-width: 1024px) {
    width: 440px;
    height: 400px;
  }

  @media (min-width: 1440px) {
    width: 630px;
    height: 400px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
  margin-bottom: 5px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 53px;
`;

export const Item = styled.li`
  width: 170px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.22;

  @media (min-width: 834px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
