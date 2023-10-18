import BackgroundImg from '../../Assets/Images/additional-background.jpg';
import { Container, Image, Title } from './AuthLayout.styled';

export default function AuthLayout({ children, title }) {
  return (
    <Container>
      <Image src={BackgroundImg} alt="background" />
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  );
}
