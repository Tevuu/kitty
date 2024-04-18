import { useState } from "react";
import { Cart } from "./Cart";
import { items } from "./resources/items";
export const Main = ({ setCard }) => {
  const [addItems, setAddItems] = useState(8);
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("C");
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-min h-full opacity-50 hover:opacity-100 duration-300 bg-neutral-100  rounded-b-lg flex-col ">
        <div className="flex flex-col gap-4 items-start p-8">
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setCategory("All")}>
            Всё
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setCategory("K")}>
            Кружки
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setCategory("I")}>
            Игрушки
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setCategory("P")}>
            Ручки
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setCategory("B")}>
            Брелки
          </button>
          <hr className="w-full" />
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setFilter("Ex")}>
            Самые дорогие
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setFilter("Cheap")}>
            Самые дешевые
          </button>
          <button
            className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-pink-400"
            onClick={() => setFilter("C")}>
            По названию
          </button>
        </div>
      </div>
      <div>
        <div className="p-8 w-full h-full flex gap-8 justify-evenly flex-wrap">
          {items
            .sort((a, b) => {
              switch (filter) {
                case "Cheap":
                  return a.cost - b.cost;
                case "Ex":
                  return b.cost - a.cost;
                case "C":
                  return a.title < b.title ? -1 : 1;
              }
            })
            .filter((item) => {
              return category != "All" ? item.category === category : true;
            })
            .slice(0, addItems)
            .map((item, index) => (
              <>
                <Cart key={index} index={index} item={item} setCard={setCard} />
              </>
            ))}
        </div>
        <div className="w-full flex justify-center p-8 z-20 my-24">
          {addItems == items.length || category != "All" ? (
            ""
          ) : (
            <button
              className="bg-neutral-100 py-4 px-16 hover:bg-neutral-200 duration-500  hover:text-pink-400 text-xl font-light rounded-lg justify-center"
              onClick={() => setAddItems((prev) => prev + 8)}>
              Загрузить ещё
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
