import { Container, Title, Status, Hours, Date, Tags } from "./styles";
import { format } from '../../../utils/date';
import { Acitivity } from "../../../types/Activity";


interface ActivityProps {
  activity: Acitivity;
}

function Activity(props: ActivityProps) {
  const { activity } = props;

  return (
    <Container>
      <Title title="Nome">
        { activity.name }
      </Title>
      <Hours title="Quantidade de Horas">
        { activity.hours } horas
      </Hours>
      <Tags title="Tags">
        { activity.tags.map(tag => <span>{tag}</span>) } 
      </Tags>
      <Date title="Data">
        { format(activity.date, 'DD/MM/YYYY') }
      </Date>
      <Status title="Status">{ activity.status }</Status>
    </Container>
  )
}

export default Activity;