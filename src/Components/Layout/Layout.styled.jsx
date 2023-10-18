import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  padding: 14px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--dark-blue);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 834px) {
    padding: 18px 60px;
  }

  @media (min-width: 1440px) {
    padding: 18px 80px;
  }
`;

export const Logotype = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--white-text);
  font-size: 20px;
  line-height: 1.21;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 834px) {
    font-size: 28px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: var(--bronze);
  padding: 10px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.37;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
  border: 1px solid var(--bronze);

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 834px) {
    padding: 11px 0;
    width: 160px;
    font-size: 16px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const LogOutButton = styled.button`
  color: var(--bronze);
  background-color: transparent;
  padding: 10px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.37;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
  border: 1px solid var(--bronze);

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 834px) {
    padding: 11px 0;
    width: 160px;
    font-size: 16px;
  }
`;

export const WelcomeText = styled.p`
  color: var(--bronze);
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 834px) {
    font-size: 20px;
  }
`;

export const Name = styled.span`
  color: var(--white-text);
  margin-right: 6px;
`;
