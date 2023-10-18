import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

import { Container, Title, SubTitle, StyledLink } from './Hero.styled';

export default function Hero() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <div>
        <Title>The chemical negatively charged</Title>
        <SubTitle>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is{' '}
        </SubTitle>
        {!isLoggedIn && <StyledLink to="/login">Get Started</StyledLink>}
      </div>
    </Container>
  );
}
