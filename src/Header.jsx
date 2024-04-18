import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./Card";
import { bonus } from "./resources/bonus";

export const Header = ({
  card,
  setCard,
  auModal,
  setAuModal,
  prModal,
  setPrModal,
}) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState();
  const [price, setPrice] = useState();

  const getCount = (count) => {
    setCount(count);
  };

  useEffect(() => {
    setPrice(card.reduce((acc, item) => acc + +item.cost * item.count, 0));
  }, [count]);

  return (
    <>
      <div className="w-full h-auto bg-neutral-100 l p-4 relative ">
        <div className="flex items-center justify-between">
          <div className="text-black/80 font-black opacity-90 text-4xl p-8 select-none flex flex-col items-center hover:text-pink-400 duration-1000">
            HELLO KITTY
            <div className="text-4xl">STORE</div>
          </div>
          <div className="flex gap-4 p-2 ">
            <div className="group ">
              <button
                className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500 hover:text-pink-400 "
                onClick={() => setOpen(!open)}>
                CARD
              </button>
              {card.length ? (
                <div className="absolute right-[310px] top-[55px] bg-pink-100 w-6 z-1 h-6 text-center group-hover:opacity-0 duration-300 rounded-full select-none font-mono font-light">
                  {card.length}
                </div>
              ) : (
                ""
              )}
            </div>
            {open ? (
              <div className="absolute w-[700px] min-h-[50px] max-h-[500px] right-11 rounded-lg bg-neutral-200 p-2 top-32 z-10">
                <div className="max-h-[400px] overflow-y-auto rounded-lg flex">
                  <div className="flex w-full flex-col gap-4">
                    {card.map((item, index) => (
                      <Card
                        key={index}
                        item={item}
                        card={card}
                        setCard={setCard}
                        getCount={getCount}
                      />
                    ))}
                  </div>
                </div>
                {card.length > 0 ? (
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                      {+bonus > 0 ? (
                        <div className="text-lg px-1 flex gap-2 items-center w-[250px]">
                          💰 Цена:
                          <div className="line-through opacity-20 text-sm ">
                            {price
                              ? price
                              : card.reduce(
                                  (acc, item) => acc + +item.cost * item.count,
                                  0
                                )}
                            .00p
                          </div>
                          {price
                            ? price - +bonus <= 0
                              ? 0
                              : card.reduce(
                                  (acc, item) => acc + +item.cost * item.count,
                                  0
                                ) - bonus
                            : card.reduce(
                                (acc, item) => acc + +item.cost * item.count,
                                0
                              ) -
                                +bonus <=
                              0
                            ? 0
                            : card.reduce(
                                (acc, item) => acc + +item.cost * item.count,
                                0
                              ) - bonus}
                          .00p
                        </div>
                      ) : (
                        <div className="text-xl px-1 ">
                          💰 Цена:
                          {price
                            ? price
                            : card.reduce(
                                (acc, item) => acc + +item.cost * item.count,
                                0
                              )}
                          .00p
                        </div>
                      )}
                      <div className="px-1 text-lg opacity-90">
                        {" "}
                        ⚡️ Бонусов осталось:{" "}
                        {price
                          ? bonus - price < 0
                            ? 0
                            : bonus - price
                          : bonus -
                              card.reduce(
                                (acc, item) => acc + +item.cost * item.count,
                                0
                              ) <
                            0
                          ? 0
                          : bonus -
                            card.reduce(
                              (acc, item) => acc + +item.cost * item.count,
                              0
                            )}
                      </div>
                    </div>
                    <button className="px-16 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-300 duration-500">
                      Купить
                    </button>
                  </div>
                ) : (
                  <div className="text-lg opacity-50 font-semibold absolute top-3 left-[40%] select-none">
                    Корзина пуста
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            <button className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500 hover:text-pink-400 cursor-pointer">
              ABOUT US
            </button>
            {localStorage.getItem("name") ? (
              <button
                className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500  hover:text-pink-400"
                onClick={() => {
                  setPrModal(!prModal);
                  setOpen(false);
                }}>
                PROFILE
              </button>
            ) : (
              <>
                <button
                  className="font-light text-2xl hover:bg-neutral-300 px-4 py-2 rounded-xl duration-500  hover:text-pink-400"
                  onClick={() => {
                    setAuModal(!auModal);
                    setPrModal(!prModal);
                  }}>
                  SIGN UP
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
