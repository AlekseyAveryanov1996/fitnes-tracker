import Form from "../../../ui/Form";
import InputComponents from "../../../ui/InputComponents";
import { BiShow } from "react-icons/bi";
import Button from "../../../ui/Button";

export default function Registr() {
  return (
    <Form>
      <InputComponents
        type="Text"
        placeholder={"Введите Ваше ФИО"}
      />
      <InputComponents
        type="email"
        placeholder={"Введите Ваш Email"}
      />
      <InputComponents
        type="password"
        placeholder={"Введите Ваш пароль"}
        icon={<BiShow />}
      />
      <InputComponents
        type="password"
        placeholder={"Подтвердите Ваш пароль"}
        icon={<BiShow />}
      />
      <Button>Зарегистрироваться</Button>
    </Form>
  );
}
