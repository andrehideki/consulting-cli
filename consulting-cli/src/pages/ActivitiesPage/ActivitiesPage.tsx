import React from "react";
import ConsultingActivities from "../../components/ConsultingAcitivities/ConsultingActivities";
import DefaultPage from "../../components/Layout/DefaultPage";

export default function ActivitiesPage() {
  return (
    <DefaultPage title="Atividades">
      <ConsultingActivities />
    </DefaultPage>
  );
}