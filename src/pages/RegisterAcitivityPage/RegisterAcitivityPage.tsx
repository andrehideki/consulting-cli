import DefaultPage from "../../components/Layout/DefaultPage";
import InputDate from "../../components/Layout/Inputs/InputDate/InputDate";
import InputNumber from "../../components/Layout/Inputs/InputNumber/InputNumber";
import InputText from "../../components/Layout/Inputs/InputText/InputText";
import TextArea from "../../components/Layout/Inputs/TextArea/TextArea";
import Row from "../../components/Layout/Row/Row";
import { Form, SaveButton } from "./styles";


export default function RegisterActivityPage() {
  return (
    <DefaultPage title="New Activity" previous="/activities">
      <Form>
        <Row>
          <InputText name="name" label="Nome" required={ true }/>
          <InputText name="tags" label="Tags"/>
        </Row>
        <Row>
          <InputNumber name="hours" label={ `Qtde. Horas` } required={ true }/>
          <InputDate name="date" label={ `Date` } required={ true }/>
        </Row>
        <Row>
          <TextArea name="description" label="Descrição"/>
        </Row>
        <Row>
          <SaveButton type="submit">Salvar</SaveButton>
        </Row>
      </Form>
    </DefaultPage>
  );
}