import styled from 'styled-components';

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;
