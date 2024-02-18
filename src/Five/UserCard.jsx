export const UserCard = ({ avatar, name, rank, features }) => {
  return (
    <div className="flex w-full gap-2 rounded-xl bg-white p-6 hover:border-2 hover:border-gray-300 hover:shadow">
      <img
        src={avatar}
        alt=""
        className="h-28 w-28 self-start rounded-full object-cover"
      />
      <div className="ml-4">
        <h1 className="font-meri text-[18px] font-black">{name}</h1>
        <h2 className="font-popi mt-1 text-[14px] font-medium">{rank}</h2>
        <div className="mt-4 flex max-w-72 flex-wrap gap-2 md:max-w-64 lg:max-w-48">
          {features && Array.isArray(features)
            ? features.map((feature) => (
                <a
                  key={feature}
                  href=""
                  className="font-popi inline-block rounded-full border-[1px] border-gray-300 px-2 py-1 text-[12px] font-medium text-[#516FD4]"
                >
                  {feature}
                </a>
              ))
            : console.log("feature ko phai la 1 mang")}
        </div>
      </div>
    </div>
  );
};
