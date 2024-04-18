import { useEffect, useState } from "react";
import { bonus } from "./resources/bonus";
import { orders } from "./resources/bonus";

export const ProfileModal = ({ prModal, setPrModal, users }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [N, setN] = useState(0);

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, [N]);

  const ChangePassword = (old, fresh) => {
    const luser = users.find(
      (item) =>
        (item.name === localStorage.getItem("name")) & (item.password === old)
    );
    if (luser) {
      const uIndex = users.findIndex(
        (item) => item.name === localStorage.getItem("name")
      );
      console.log(uIndex);
      users.splice(uIndex, 1);
      users.push({ name: luser.name, password: fresh });

      alert("Пароль изменен");
      console.log(users); // В консоли видно что пароль изменен
    } else {
      alert("Ошибка, проверьте поля ввода!");
    }
  };

  const ChangeUserName = (name) => {
    const luser = users.find(
      (item) => item.name === localStorage.getItem("name")
    );
    if (luser) {
      const uIndex = users.findIndex(
        (item) => item.name === localStorage.getItem("name")
      );
      console.log(uIndex);
      users.splice(uIndex, 1);
      users.push({ name: name, password: luser.password });
      setN((prev) => prev + 1);
      localStorage.removeItem("name");
      localStorage.setItem("name", `${name}`);
      alert("Логин изменен");
      console.log(users); // В консоли видно что логин изменен
    } else {
      alert("Ошибка, проверьте поля ввода!");
    }
  };
  return (
    <div className="w-full h-full fixed inset-0 z-10 flex items-center justify-center bg-black/90 duration-500">
      <div className="bg-white/80 w-[850px] min-h-[500px] duration-200 rounded-lg relative">
        <button
          className="absolute right-2 top-1 font-semibold text-lg duration-700 hover:rotate-180 hover:text-red-500"
          onClick={() => setPrModal(!prModal)}>
          ❌
        </button>
        <div className="p-2"></div>
        <div className="p-4 flex flex-col  gap-4">
          <div className="bg-white/80 p-4 w-full rounded-lg">
            <div className="text-mono text-2xl opacity-50">Личные данные</div>
            <div className="p-2">
              <div className="text-xl ">👋 Ваше имя: {name}</div>
              <div className="text-xl flex ">⚡️ Кол-во бонусов: {bonus}</div>
              <div className="text-xl flex gap-2">
                📦 Кол-во заказов: {orders}
              </div>
            </div>
          </div>
          <div className="bg-white/80 p-4 w-full rounded-lg text-mono ">
            <div className="text-2xl opacity-50">⚙️Изменение данных</div>
            <div className="p-2 flex flex-col text-xl gap-2">
              🔓 Смена пароля
              <input
                className="px-2 py-2  focus:outline outline-1 outline-pink-200 duration-300 rounded-lg"
                placeholder="Старый пароль"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                className="px-2 py-2  focus:outline outline-1 outline-pink-200 duration-300 rounded-lg "
                placeholder="Новый пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="hover:opacity-100 hover:text-pink-400 duration-300 bg-white py-2 rounded-lg"
                onClick={() => ChangePassword(oldPassword, password)}>
                Изменить пароль
              </button>
            </div>
            <div className="p-2 flex flex-col text-xl gap-2">
              💬 Смена имени
              <input
                className="px-2 py-2 focus:outline outline-1 outline-pink-200 duration-300 rounded-lg"
                placeholder="Новое имя"
                onChange={(e) => setLogin(e.target.value)}
              />
              <button
                className="hover:opacity-100 hover:text-pink-400 duration-300 bg-white py-2 rounded-lg"
                onClick={() => ChangeUserName(login)}>
                Изменить имя
              </button>
            </div>
          </div>
          <button
            className="hover:opacity-100 hover:text-red-400 duration-300 bg-white py-2 rounded-lg text-xl opacity-40"
            onClick={() => {
              localStorage.removeItem("name");
              window.location.reload();
            }}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
};
