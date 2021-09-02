import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../providers/auth";
import { Acitivity } from "../../types/Activity";
import { get } from "../../utils/request";
import { Container } from './styles';
import ConsultingActivity from "./Activity/Activity";
import ActivitiesFilter from "./Filter/ActivitiesFilter";

export default function ConsultingActivities() {
  const [activities, setActivities] = useState<Acitivity[]>([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.id) return;
      get<Acitivity[]>(`consulting/${auth.id}/activity?month=1&year=2021`)
        .then((activities: Acitivity[]) => setActivities(activities))
        .catch(error => console.log(error));
  }, [auth]);

  return (
    <Container>
      <ActivitiesFilter />
      { activities.map(activity => (
        <ConsultingActivity key={ activity.id } activity={ activity } />
      )) }
    </Container>
  );
}
