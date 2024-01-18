import { FaRegUser } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import InputComponents from "../../../ui/InputComponents";
import Button from "../../../ui/Button";
import Form from "../../../ui/Form";

export default function Autentification() {
  return (
    <Form>
      <InputComponents
        type="email"
        placeholder={"Введите ваш Email"}
        icon={<FaRegUser />}
      />
      <InputComponents
        type="password"
        placeholder={"Укажите ваш пароль"}
        icon={<BiShow />}
      />

      <Button>Войти</Button>
    </Form>
  );
}
