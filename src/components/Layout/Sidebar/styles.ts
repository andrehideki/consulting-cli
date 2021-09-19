import styled, { css } from 'styled-components';
import { IoDocumentOutline, IoHomeOutline } from 'react-icons/io5';

export const Container = styled.nav`
  width: 20%;
  height: 100%;
  padding: 1rem;

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--color-sidebar);
`;

export const Logo = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;

  a {
    display: flex;  
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    color: var(--color-white-blue);
    gap: 1rem;
  }
`;

const icon = css`
  color: var(--color-white-blue);
  fill: var(--color-white-blue);
  stroke: var(--color-white-blue);
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HomeIcon = styled(IoHomeOutline)`
  ${icon}
`;

export const ActivityIcon = styled(IoDocumentOutline)`
  ${icon}
`;