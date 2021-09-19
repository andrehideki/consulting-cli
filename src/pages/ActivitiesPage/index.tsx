import ConsultingActivities from "../../components/ConsultingAcitivities";
import DefaultPage from "../../components/Layout/DefaultPage";
import { RegisterActivityLink, RegisterIcon } from "./styles";

export default function ActivitiesPage() {
  return (
    <DefaultPage title="Atividades">
      <ConsultingActivities />
      <RegisterActivityLink to="/activities/register">
        <RegisterIcon />
      </RegisterActivityLink>
    </DefaultPage>
  );
}