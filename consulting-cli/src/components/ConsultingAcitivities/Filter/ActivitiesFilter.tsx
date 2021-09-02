import MonthsSelect from '../../Layout/Inputs/MonthSelect/MonthsSelect';
import YearSelect from '../../Layout/Inputs/YearSelect/YearSelect';
import { Container, Button, SearchIcon } from './styles';

export default function ActivitiesFilter() {
  
  return (
    <Container>
      <form>
        <div>
          <label>Mês</label>
          <MonthsSelect />
        </div>
        <div>
          <label>Ano</label>
          <YearSelect/>
        </div>
        <Button>
          <SearchIcon/>
          Pesquisar
        </Button>
      </form>
    </Container>
  );
}