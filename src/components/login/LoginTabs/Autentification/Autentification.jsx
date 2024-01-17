import { FaRegUser } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

export default function Autentification() {
  return (
    <div>
      <Input
        type="email"
        placeholder={"Введите ваш Email"}
        icon={<FaRegUser />}
      />
      <Input
        type="password"
        placeholder={"Укажите ваш пароль"}
        icon={<BiShow />}
      />

      <Button>Отправить</Button>
    </div>
  );
}
