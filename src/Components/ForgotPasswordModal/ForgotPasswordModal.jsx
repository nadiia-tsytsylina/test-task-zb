import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsPasswordReseted,
} from '../../redux/selectors';
import { resetPassword } from '../../redux/operations';

import {
  Overlay,
  Modal,
  Message,
  CloseButton,
  StyledForm,
  Label,
  Input,
  SubmitButton,
} from './ForgotPasswordModal.styled';
import Cross from '../../Assets/Images/Svg/cross.svg';

const modalRoot = document.querySelector('#modal-root');

export default function ForgotPasswordModal({ onClose }) {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const isPasswordReseted = useSelector(selectIsPasswordReseted);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (authError === 'Request failed with status code 404') {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    } else if (!authError && isPasswordReseted) {
      setShowErrorMessage(false);
      setShowSuccessMessage(true);
      setTimeout(() => onClose(), 4000);
    }
  }, [authError, isPasswordReseted, onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSubmit = ({ email }, actions) => {
    dispatch(resetPassword({ email }));
    actions.resetForm();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseButton type="button" onClick={onClose}>
          <img src={Cross} alt="close buton" width={20} />
        </CloseButton>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <Label>
              Please enter your email to reset password
              <Input placeholder="Email" type="email" name="email" required />
            </Label>
            <SubmitButton type="submit">Send</SubmitButton>
          </StyledForm>
        </Formik>
        {showErrorMessage && (
          <Message>User with this email doesn't exist</Message>
        )}
        {showSuccessMessage && (
          <Message>
            New password was sent.
            <br /> Please check your email
          </Message>
        )}
      </Modal>
    </Overlay>,
    modalRoot
  );
}
