import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const PageContent = styled.div`
  margin-left: 20%;
  width: 80%;
  background: var(--color-white);
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  padding: 1rem 1.25rem 0 1.25rem;overflow-y: hidden;
`;