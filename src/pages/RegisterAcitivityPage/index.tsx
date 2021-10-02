import { useState } from "react";
import { useHistory } from "react-router";
import DefaultPage from "../../components/Layout/DefaultPage";
import InputDate from "../../components/Layout/Inputs/InputDate";
import InputNumber from "../../components/Layout/Inputs/InputNumber";
import InputTags from "../../components/Layout/Inputs/InputTags";
import InputText from "../../components/Layout/Inputs/InputText";
import TextArea from "../../components/Layout/Inputs/TextArea";
import Row from "../../components/Layout/Row";
import { useAuth } from "../../providers/auth";
import { RegisterAcitivity } from "../../types/Activity";
import { post } from "../../utils/request";
import { Form, SaveButton, CancelButton } from "./styles";


export default function RegisterActivityPage() {

  const { auth } = useAuth();
  const history = useHistory();
  const [activity, setActivity] = useState<RegisterAcitivity>({
    name: '',
    tags: [],
    date: '',
    amountOfHours: 0,
    consultingId: auth.id,
    description: ''
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      validate();
      post<RegisterAcitivity>('activity', activity);
      alert("Atividade cadastrada com sucesso!");
      history.push('/');
    } catch (error: any) {
      alert(error);
      console.log(error);
    }
  }

  function handleChange(event: any) {
    let { name, value } = event.target;
    setActivity({...activity, [name]: value});
  }

  function handleChangeTags(tags: string[]) {
    setActivity({...activity, tags });
  }

  function validate() {
    if (activity.amountOfHours <= 0) throw new Error();
  }

  return (
    <DefaultPage title="Nova Atividade" previous="/activities">
      <Form onSubmit={ handleSubmit } autoComplete="off">
        <Row>
          <InputText name="name" label="Nome" value={ activity.name } onChange={ handleChange } required={ true }/>
        </Row>
        <Row>
          <InputTags name="tags" label="Tags" value={ activity.tags } onChange={ handleChange }  onChangeTags={ handleChangeTags }/>
        </Row>
        <Row>
          <InputDate name="date" label="Data" value={ activity.date } onChange={ handleChange } required={ true }/>
        </Row>
        <Row>
          <InputNumber name="amountOfHours" label={ `Qtde. Horas` } value={ activity.amountOfHours } onChange={ handleChange } required={ true }/>
        </Row>
        <Row>
          <TextArea name="description" label="Descrição" value={ activity.description } onChange={ handleChange } rows={4}/>
        </Row>
        <Row>
          <CancelButton type="button">Cancelar</CancelButton>
          <SaveButton type="submit">Salvar</SaveButton>
        </Row>
      </Form>
    </DefaultPage>
  );
}