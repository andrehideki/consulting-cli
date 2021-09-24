import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.div`
  display: block;
  margin-bottom: .5rem;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input, textarea, select {
    width: 100%;
  }
`;