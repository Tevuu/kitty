import { useState } from "react";
export const AuthModal = ({ auModal, setAuModal, users, setUsers }) => {
  const [reg, setReg] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const CheckAuth = (login, passowrd) => {
    if (!login || !passowrd) {
      alert("Заполните все поля!");
    } else if (
      users.find((item) => item.name === login && item.password === passowrd)
    ) {
      setAuModal(false);
      localStorage.setItem("name", `${login}`);
    } else {
      alert("Неправильный логин или пароль!");
    }
  };

  const RegUser = (login, password) => {
    users.push({ name: login, password: password });
    setReg(!reg);
    alert(`Вы успешно зарегестрировались! ${login}`);
  };
  if (!auModal) return null;

  return (
    <div className="w-full h-full fixed inset-0 z-10 flex items-center justify-center bg-black/90 duration-500">
      <div className="bg-neutral-200/80 w-[850px] h-[500px] duration-200 rounded-lg">
        <div className="flex items-center min-w-full min-h-full relative">
          <button
            className="absolute right-4 top-2 font-semibold text-lg duration-700 hover:rotate-180 hover:text-red-500"
            onClick={() => setAuModal(false)}>
            ❌
          </button>
          <div className="w-1/2 h-max flex items-center justify-center flex-col">
            <img
              src="https://papik.pro/uploads/posts/2023-03/1677668581_papik-pro-p-krasivie-risunki-hello-kitty-22.png"
              className="p-4  w-[500px] h-[300px]"
            />
          </div>
          <div className="w-1/2 h-max flex items-center justify-center flex-col gap-4 duration-500">
            {reg ? (
              <>
                <div className="font-light p-2 font-mono text-4xl text-black/80">
                  Авторизация 👀
                </div>
                <input
                  type="text"
                  onChange={(e) => setLogin(e.target.value)}
                  title="Login"
                  placeholder="Login"
                  className="w-[250px] px-2 py-2 focus:outline outline-1 outline-pink-200 duration-300  rounded-lg"
                />
                <input
                  type="text"
                  title="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-[250px] px-2 py-2 focus:outline outline-1 outline-pink-200 duration-300 rounded-lg "
                />
                <button
                  className="bg-white w-[250px] h-[39px] rounded-lg duration-500 focus:outline outline-1 outline-pink-200 text-black/50"
                  onClick={() => CheckAuth(login, password)}>
                  Войти
                </button>
                <div className="flex flex-col">
                  <div className=" opacity-40">Еще нет аккаунта?</div>
                  <button
                    className="hover:opacity-100 hover:text-pink-400 opacity-40 duration-300"
                    onClick={() => setReg(!reg)}>
                    Зарегистрироваться
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="font-light p-2 font-mono text-4xl text-black/80">
                  Регестрация
                </div>
                <input
                  type="text"
                  title="Login"
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="Login"
                  className="w-[250px] px-2 py-2 focus:outline outline-1 outline-pink-200 duration-300  rounded-lg"
                />
                <input
                  type="text"
                  title="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-[250px] px-2 py-2 focus:outline outline-1 outline-pink-200 duration-300 rounded-lg "
                />
                <button
                  className="bg-white w-[250px] h-[39px] rounded-lg duration-500 hover:outline outline-1 outline-pink-200 text-black/50"
                  onClick={() => RegUser(login, password)}>
                  Зарегистрироваться
                </button>
                <div className="flex flex-col">
                  <div className=" opacity-40">У вас есть аккаунт?</div>
                  <button
                    className="hover:opacity-100 hover:text-pink-400 opacity-40 duration-300"
                    onClick={() => setReg(!reg)}>
                    Авторизоваться
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
