import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { AuthModal } from "./AuthModal";
import { ProfileModal } from "./ProfileModal";

function App() {
  const [card, setCard] = useState([]);
  const [users, setUsers] = useState([{ name: "admin", password: "admin" }]);

  const [auModal, setAuModal] = useState(false);
  const [prModal, setPrModal] = useState(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {auModal ? (
        <AuthModal
          auModal={auModal}
          setAuModal={setAuModal}
          users={users}
          setUsers={setUsers}
        />
      ) : null}
      {prModal ? (
        <ProfileModal prModal={prModal} setPrModal={setPrModal} users={users} />
      ) : null}
      <Header
        card={card}
        setCard={setCard}
        auModal={auModal}
        prModal={prModal}
        setPrModal={setPrModal}
        setAuModal={setAuModal}
      />
      <Main setCard={setCard} />
    </div>
  );
}

export default App;
