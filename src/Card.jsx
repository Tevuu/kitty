import { useState } from "react";

export const Card = ({ item, card, setCard, getCount }) => {
  const [count, setCount] = useState(1);

  if (count === 0) {
    setCard((prev) => prev.filter((old) => old.id != item.id));
  }
  return (
    <div className="flex justify-between w-full bg-neutral-100 p-4 hover:opacity-100 duration-500 cursor-pointer rounded items-center">
      <div className="">
        <img src={item.img} className="w-20 h-20 rounded-lg object-cover" />
      </div>
      <div className="text-xl font-semibold opacity-80">{item.title}</div>
      <div className="flex gap-2 bg-white px-4 w-[185px] items-center justify-center h-[40px] rounded-lg py-2">
        <button
          className="hover:bg-pink-100 px-6 py-2 rounded-l-lg"
          onClick={() => {
            setCount((prev) => ++prev);
            getCount(item.count);
            item.count++;
          }}>
          +
        </button>
        <div className="px-6 py-2 rounded-lg">{count}</div>
        <button
          className="hover:bg-pink-100 px-6 py-2 rounded-r-lg"
          onClick={() => {
            setCount((prev) => --prev);
            getCount(count);
            item.count--;
          }}>
          -
        </button>
      </div>
      <div className="text-xl font-light">{item.cost * count},00p</div>
    </div>
  );
};
