import AuthLayout from '../Components/AuthLayout/AuthLayout';
import LoginForm from '../Components/LoginForm/LoginForm';

export default function Login() {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
}
