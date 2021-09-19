import { FC } from 'react';
import MonthsSelect from '../../Layout/Inputs/MonthSelect';
import { Container, Button, SearchIcon } from './styles';

interface Props {
  filter: Filter;
  setFilter: Function;
  searchActivities: Function;
}

export interface Filter {
  year: number;
  month: number;
}

export const ActivitiesFilter: FC<Props> = ({ filter, setFilter, searchActivities }) => {

  const { year, month } = filter;

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setFilter({ ...filter, [name]: value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    searchActivities(month, year);
  }

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>Mês</label>
          <MonthsSelect id="month" name="month" value={ month } onChange={ handleChange } />
        </div>
        <div>
          <label>Ano</label>
          <input id="year" name="year" value={ year } type="text" placeholder="Ano" onChange={ handleChange }/>
        </div>
        <Button>
          <SearchIcon/>
          Pesquisar
        </Button>
      </form>
    </Container>
  );
}

export default ActivitiesFilter;