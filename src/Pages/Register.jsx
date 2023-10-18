import AuthLayout from '../Components/AuthLayout/AuthLayout';
import RegisterForm from '../Components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
}
