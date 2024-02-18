export const Collections = () => {
  const TAGS = ["Profile", "New York", "Relaxing", "Person", "Fashion"];
  const listCard = [
    {
      img1: "https://placewaifu.com/image/100",
      img2: "https://placewaifu.com/image/200",
      img3: "https://placewaifu.com/image/300",
      img4: "https://placewaifu.com/image/450",
      title: "People",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      quantity: "144",
    },

    {
      img1: "https://placewaifu.com/image/100",
      img2: "https://placewaifu.com/image/200",
      img3: "https://placewaifu.com/image/300",
      img4: "https://placewaifu.com/image/450",
      title: "Nature",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      quantity: "7K",
    },

    {
      img1: "https://placewaifu.com/image/100",
      img2: "https://placewaifu.com/image/200",
      img3: "https://placewaifu.com/image/300",
      img4: "https://placewaifu.com/image/450",
      title: "History",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      quantity: "431",
    },
  ];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 text-[#0E0E38] shadow-lg">
      <h1 className="font-meri text-2xl font-bold">Popular Collections</h1>
      <div className="font-popi mt-6 space-x-2 text-base font-medium">
        {TAGS.map((tag) => (
          <a
            className="mb-2 inline-block cursor-pointer rounded-lg bg-white p-[10px] hover:text-blue-500"
            href="#"
            key={tag}
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {listCard.map((card) => (
          <div className="rounded-3xl bg-white p-6">
            <div>
              <img
                src={card.img1}
                className="aspect-video w-full rounded-2xl"
                alt=""
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src={card.img2}
                className="aspect-video w-full rounded-2xl"
                alt=""
              />
              <img
                src={card.img3}
                className="aspect-video w-full rounded-2xl"
                alt=""
              />
              <img
                src={card.img4}
                className="aspect-video w-full rounded-2xl"
                alt=""
              />
            </div>

            <div className="font-popi mt-6 flex items-center font-medium">
              <p className="grow text-[26px]">{card.title}</p>
              {card.icon}
              <p className="ml-2 text-base">{card.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
