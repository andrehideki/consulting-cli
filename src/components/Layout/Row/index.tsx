import styled from "styled-components";

export default function Row(props: any) {
  return (
    <Container>
      { props.children }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;