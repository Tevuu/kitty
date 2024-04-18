import { useState } from "react";
import { CartModal } from "./CartModal";

export const Cart = ({ item, setCard }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <CartModal item={item} setModal={setModal} setCard={setCard} />
      ) : null}
      <div className="w-[350px] min-h-[400px] h-max pb-2 bg-neutral-50 rounded-lg border flex flex-col items-center hover:scale-105 duration-200">
        <div className="w-full h-72">
          <img
            src={item.img}
            className="h-full w-full rounded-t-lg border bg-center object-cover"
          />
        </div>
        <div className="p-2 w-full">
          <div className="w-full font-semibold text-2xl">{item.title}</div>
          <div className="w-full font-semibold text-lg opacity-55">
            {item.desc}
          </div>
          <div className="w-full font-light text-2xl">{item.cost},00р</div>
        </div>
        <button
          className="w-[90%] p-2 bg-neutral-100 hover:bg-neutral-200 opacity-80 hover:opacity-100 duration-500 rounded-lg"
          onClick={() =>
            setCard((prev) => {
              if (prev && prev.length) {
                const isExist = prev.find((item1) => item1.id == item.id);
                return isExist ? [...prev] : [...prev, { ...item, count: 1 }];
              } else {
                return [{ ...item, count: 1 }];
              }
            })
          }>
          Купить
        </button>
        <button
          className="w-[90%] p-2 my-2 bg-neutral-100 hover:bg-neutral-200 opacity-80 hover:opacity-100 duration-500 rounded-lg"
          onClick={() => setModal(true)}>
          Подробнее
        </button>
      </div>
    </>
  );
};
