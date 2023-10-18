import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import { authLogout } from '../../redux/operations';
import {
  Navigation,
  Logotype,
  StyledLink,
  AuthContainer,
  Container,
  LogOutButton,
  WelcomeText,
  Name,
} from './Layout.styled';
import Logo from '../../Assets/Images/Svg/logo.svg';

export default function Layout() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(authLogout());
  };

  return (
    <>
      <Navigation>
        <Logotype to="/">
          <img src={Logo} alt="logo" width={40} />
          Logo
        </Logotype>
        {isLoggedIn ? (
          <AuthContainer>
            <WelcomeText>
              Welcome, <Name>{userName}</Name>
            </WelcomeText>
            <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
          </AuthContainer>
        ) : (
          <AuthContainer>
            <StyledLink to="/login">Log In</StyledLink>
            <StyledLink
              style={{
                background: 'var(--bronze)',
                color: 'var(--white-text)',
              }}
              to="/register"
            >
              Sign Up
            </StyledLink>
          </AuthContainer>
        )}
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
