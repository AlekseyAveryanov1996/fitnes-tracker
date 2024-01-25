import Form from "../../../ui/Form";
import InputComponents from "../../../ui/InputComponents";
import { BiShow } from "react-icons/bi";
import Button from "../../../ui/Button";
import fs from 'fs';
import { users } from "../../../../data";

export default function Registr() {

  let fio;
  let email;
  let password;
  let password2;

  function addUsers(e) {
    e.preventDefault();
    let user = {
      userName: fio,
      userEmail: email,
      userPassword: password,
    }
    users.push(user)
    fs.writeFileSync('usersBD.txt', JSON.stringify(users), 'utf-8');
    console.log(users)
  }

  return (
    <Form>
      <InputComponents
        type="Text"
        placeholder={"Введите Ваше ФИО"}
        onChange={(e) => fio = e.target.value}
      />
      <InputComponents
        type="email"
        placeholder={"Введите Ваш Email"}
        onChange={(e) => email = e.target.value}
      />
      <InputComponents
        type="password"
        placeholder={"Введите Ваш пароль"}
        icon={<BiShow />}
        onChange={(e) => password = e.target.value}
      />
      <InputComponents
        type="password"
        placeholder={"Подтвердите Ваш пароль"}
        icon={<BiShow />}
        onChange={(e) => password2 = e.target.value}
      />
      <Button onClick={addUsers}>Зарегистрироваться</Button>
    </Form>
  );
}
