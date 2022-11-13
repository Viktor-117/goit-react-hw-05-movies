import { Title, StyledLink } from './NotFound.styled';

export default function NotFound() {
  return (
    <div>
      <Title>Page not found</Title>
      <StyledLink to={'/'}>Return to Homepage</StyledLink>
    </div>
  );
}
