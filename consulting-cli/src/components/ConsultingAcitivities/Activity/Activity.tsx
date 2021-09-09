import { Container, Title, Status, Hours, Date } from "./styles";
import { format } from '../../../utils/date';

function Activity(props: any) {
  const { activity } = props;

  return (
    <Container>
      <Title title="Nome">
        { activity.name }
      </Title>
      <Hours title="Quantidade de Horas">
        { activity.hours } horas
      </Hours>
      <Date title="Data">
        { format(activity.date, 'DD/MM/YYYY') }
      </Date>
      <Status title="Status">{ activity.status }</Status>
    </Container>
  )
}

export default Activity;