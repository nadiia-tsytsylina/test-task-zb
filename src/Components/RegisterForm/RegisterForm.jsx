import { Formik, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '../../redux/operations';
import { selectAuthError, selectIsRegistred } from '../../redux/selectors';

import { registerSchema } from '../../services/schema';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import {
  StyledForm,
  LabelContainer,
  Label,
  Input,
  ErrorText,
  SubmitButton,
  SignInText,
  SignInLink,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRegistred = useSelector(selectIsRegistred);
  const authError = useSelector(selectAuthError);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(authRegister({ name, email, password }));
    actions.resetForm();
  };

  useEffect(() => {
    if (isRegistred && !authError) {
      navigate('/login');
    } else if (
      !isRegistred &&
      authError === 'Request failed with status code 409'
    ) {
      setShowErrorModal(true);
    }
  }, [isRegistred, authError, navigate]);

  const onCloseModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm: '',
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <LabelContainer>
              <Label>
                Name
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  borderstyle={
                    errors.name && touched.name
                      ? '2px solid var(--error-color)'
                      : '2px solid var(--grey-background)'
                  }
                />
                <ErrorMessage name="name">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Label>
              <Label>
                Email
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  borderstyle={
                    errors.email && touched.email
                      ? '2px solid var(--error-color)'
                      : '2px solid var(--grey-background)'
                  }
                />
                <ErrorMessage name="email">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Label>
              <Label>
                Password
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  borderstyle={
                    errors.password && touched.password
                      ? '2px solid var(--error-color)'
                      : '2px solid var(--grey-background)'
                  }
                />
                <ErrorMessage name="password">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Label>
              <Label>
                Confirm Your password
                <Input
                  placeholder="Confirm Your password"
                  type="password"
                  name="confirm"
                  required
                  borderstyle={
                    errors.confirm && touched.confirm
                      ? '2px solid var(--error-color)'
                      : '2px solid var(--grey-background)'
                  }
                />
                <ErrorMessage name="confirm">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Label>
            </LabelContainer>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <SignInText>
              Already have account?
              <SignInLink to="/login">Sign In</SignInLink>
            </SignInText>
          </StyledForm>
        )}
      </Formik>
      {showErrorModal && <ErrorModal onClose={onCloseModal} />}
    </>
  );
}
