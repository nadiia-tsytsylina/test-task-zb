import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 111;
`;

export const Modal = styled.div`
  position: relative;
  padding: 40px 0;
  background-color: var(--white-text);
  border-radius: 5px;
  border: 1px solid var(--bronze);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 834px) {
    padding: 60px;
  }

  @media (min-width: 1440px) {
    padding: 80px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--dark-blue);
  font-size: 20px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;
