import styled from "styled-components";
import { Form, Field } from "formik";

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
  padding: 40px 10px;
  background-color: var(--white-text);
  border-radius: 5px;
  border: 1px solid var(--bronze);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 834px) {
    padding: 60px;
  }

  @media (min-width: 1440px) {
    padding: 80px;
  }
`;

export const Message = styled.p`
  color: var(--dark-blue);
  font-size: 16px;
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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--dark-text);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;
`;

export const Input = styled(Field)`
  padding: 14px 20px;
  background-color: var(--grey-background);
  color: var(--dark-blue);
  font-family: Lato;
  font-size: 14px;
  line-height: 1.57;
  outline: none;
  border-radius: 5px;
  border: 2px solid var(--grey-background);
  width: 310px;

  &::placeholder {
    color: var(--dark-blue);
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  color: var(--white-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  background-color: var(--bronze);
  border: none;
  border-radius: 5px;
  padding: 11px 0;
  width: 100%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  font-family: inherit;
  margin-top: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;
