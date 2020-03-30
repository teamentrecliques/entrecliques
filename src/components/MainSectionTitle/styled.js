import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  text-transform: uppercase;

  > p {
    margin-bottom: 0.2em;
  }
`;

export const TopText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1.4em;
  font-weight: 300;
`;

export const StrongText = styled.p`
  color: ${props => props.theme.primary};
  font-size: 4em;
  font-weight: 700;

  &.secondary {
    color: ${props => props.theme.secondary};
  }
`;

export const RegularText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 4em;
  font-weight: 400;
`;
