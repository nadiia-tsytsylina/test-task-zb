import styled from "styled-components";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
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
  border: ${({ borderstyle }) => borderstyle};
  width: 310px;

  &::placeholder {
    color: var(--dark-blue);
    opacity: 0.5;
  }
`;

export const ErrorText = styled.p`
  color: var(--error-color);
  font-size: 12px;
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

export const SignInText = styled.p`
  color: var(--dark-text);
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
`;

export const SignInLink = styled(Link)`
  color: var(--bronze);
  display: inline-block;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 6px;

  &:hover {
    transform: scale(1.1);
  }
`;
