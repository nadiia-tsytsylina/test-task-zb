import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/operations';
import ForgotPasswordModal from '../../Components/ForgotPasswordModal/ForgotPasswordModal';

import {
  StyledForm,
  LabelContainer,
  Label,
  Input,
  ForgotButton,
  SubmitButton,
  SignUpText,
  SignUpLink,
} from './LoginForm.styled';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = ({ email, password }, actions) => {
    dispatch(authLogin({ email, password }));
    actions.resetForm();
  };

  const onForgotPassword = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <LabelContainer>
            <Label>
              Email
              <Input placeholder="Email" type="email" name="email" required />
            </Label>
            <Label>
              Password
              <Input
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </Label>
          </LabelContainer>
          <ForgotButton type="button" onClick={onForgotPassword}>
            Forgot password?
          </ForgotButton>
          <SubmitButton type="submit">Sign In</SubmitButton>
          <SignUpText>
            Don’t have account?
            <SignUpLink to="/register">Sign Up</SignUpLink>
          </SignUpText>
        </StyledForm>
      </Formik>
      {showModal && <ForgotPasswordModal onClose={onCloseModal} />}
    </>
  );
}
