import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  padding: 1rem;
  margin-top: .5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const section = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  &:before {
    font-size: .8rem;
    font-weight: 500;
    content: "${ props => props.title}";
  }
`;

export const Status = styled(section)`
  font-size: 0;
  background: var(${ props => props.children?.toString() == 'opened'? '--color-open-activity' : '--color-closed-activity' });
  padding: .25rem;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  &:after {
    font-size: 1rem;
    content: "${ props => props.children?.toString() == 'opened'? 'Aberto' : 'Fechado' }";
  }
`;

export const Title = styled(section)`
  width: 20%;
`;

export const Hours = styled(section)`
`;

export const Date = styled(section)`
`;

export const Tags = styled(section)`
`;