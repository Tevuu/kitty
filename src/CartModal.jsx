export const CartModal = ({ item, setModal, setCard }) => {
  return (
    <div className="w-full h-full fixed inset-0 z-10 flex items-center justify-center bg-black/30 duration-500">
      <div className="bg-neutral-200 w-[850px] h-[500px] duration-200 rounded-lg">
        <div className="flex items-center w-full h-full p-4 relative">
          <button
            className="absolute right-4 top-2 font-semibold text-lg duration-700 hover:rotate-180 hover:text-red-500"
            onClick={() => setModal(false)}>
            ❌
          </button>
          <div className="w-full flex gap-4">
            <div className="flex items-center justify-center w-1/2">
              <img
                src={item.img}
                className="object-cover w-[380px] h-[380px] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-[450px] gap-5">
              <div className="bg-white w-full h-min rounded-lg p-4">
                <div className="text-lg font-mono">{item.title}</div>
              </div>
              <div className="bg-white w-full h-min rounded-lg p-4">
                <div className="text-lg font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  iusto debitis, hic neque delectus officia magnam? Animi
                  eveniet consequuntur, inventore doloremque dolore iure modi
                  veniam provident nulla fuga explicabo ut.
                  <p>{item.desc}</p>
                </div>
              </div>
              <button
                className="bg-white w-full h-min rounded-lg p-4 hover:bg-pink-100 duration-500"
                onClick={() =>
                  setCard((prev) => {
                    if (prev && prev.length) {
                      const isExist = prev.find((item1) => item1.id == item.id);
                      return isExist
                        ? [...prev]
                        : [...prev, { ...item, count: 1 }];
                    } else {
                      return [{ ...item, count: 1 }];
                    }
                  })
                }>
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
