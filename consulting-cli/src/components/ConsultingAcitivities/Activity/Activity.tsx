import { Container, Title, Status, Hours, Date } from "./styles";
import { format } from '../../../utils/date';

function Activity(props: any) {
  const { activity } = props;

  return (
    <Container>
      <Title>
        <small>Nome</small>
        <span>{ activity.name }</span>
      </Title>
      <Hours>{ activity.hours } horas</Hours>
      <Date>{ format(activity.date, 'DD/MM/YYYY') }</Date>
      <Status>{ activity.status }</Status>
    </Container>
  )
}

export default Activity;