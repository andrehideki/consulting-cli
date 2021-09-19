import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../providers/auth";
import { Acitivity } from "../../types/Activity";
import { get } from "../../utils/request";
import { Container } from './styles';
import ConsultingActivity from "./Activity";
import ActivitiesFilter, { Filter } from "./Filter";
import { today } from "../../utils/date";

export default function ConsultingActivities() {
  
  const [filter, setFilter] = useState<Filter>({
    month: today().getMonth() + 1,
    year: today().getFullYear()
  });
  const [activities, setActivities] = useState<Acitivity[]>([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.id) return;
    searchActivities(filter.month, filter.year);
  }, [auth]);

  const searchActivities = (month: number, year: number) => {
    get<Acitivity[]>(`consulting/${auth.id}/activity?month=${month}&year=${year}`)
      .then((activities: Acitivity[]) => setActivities(activities))
      .catch(error => console.log(error));
  }

  return (
    <Container>
      <ActivitiesFilter filter={ filter } setFilter={ setFilter } searchActivities={ searchActivities }/>
      { activities.map(activity => (
        <ConsultingActivity key={ activity.id } activity={ activity } />
      )) }
    </Container>
  );
}
