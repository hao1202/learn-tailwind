import { UserCard } from "./UserCard";

const features = ["Reputation", "New users", "Voters", "Editors", "Moderators"];

const members = [
  {
    avatar:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/3/14/888940/118208206_9491251922-02.jpg",
    name: "Lelah Nichols",
    rank: "Troy, MI",
    features: ["clothes", "stem"],
  },

  {
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2022/02/04/Tuan-Tran-8885-1643947612.jpg",
    name: "Jesus Weiss",
    rank: "Fort Worth, TX",
    features: ["headset", "gadget", "speed", "winter"],
  },

  {
    avatar:
      "https://duyendangvietnam.net.vn/public/uploads/file1s/pv_Thanh_Toan/T09%20-%202023/tuantran.jpeg",
    name: "Annie Rice",
    rank: "Austin, TX",
    features: ["road", "mountain", "trip", "earth", "nature"],
  },

  {
    avatar:
      "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/hotnnz/2017_09_29/TuanTran3.jpg.webp",
    name: "Robert Brower",
    rank: "Cincinnati, OH",
    features: ["Maintenance", "gears", "frames", "repair"],
  },

  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoo9V9Oc68gjvV3bMkf9FIos_MWexyno0m4QhiBioSnRhHgleU0h76WTwkZenzyWLop8&usqp=CAU",
    name: "Amy Campbell",
    rank: "Warrior, AL",
    features: ["music", "disks"],
  },

  {
    avatar:
      "https://sohanews.sohacdn.com/160588918557773824/2021/3/13/tuantran-2-16154339334231353362227-16155973327031655535392.jpg",
    name: "Anthony S. Morin",
    rank: "Lyndhurst, NJ",
    features: ["vintage", "electric"],
  },
];

export const UserList = () => {
  return (
    <div className="min-w-[25rem] rounded-lg bg-white p-5 shadow md:min-w-[40rem] md:p-8 lg:min-w-[60rem] lg:p-12">
      <h1 className="font-meri text-2xl font-black lg:text-3xl">Users</h1>

      <div className="mt-2 md:mt-6 md:flex md:justify-between md:gap-10">
        <div className="relative rounded-md border-2 border-gray-300 hover:border-gray-950">
          <input
            type="text"
            placeholder="Search users"
            className="font-popi mx-1 p-2 pl-[29px] text-sm font-medium outline-none lg:min-w-[20rem]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-2 top-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="font-popi mt-4 flex items-center gap-4 text-[13px] font-medium text-[#151B32] md:mt-0">
          {features.map((feature) => (
            <a
              href=""
              className="rounded-lg p-1 hover:bg-[#849FFF] hover:text-white md:p-2"
              key={feature}
            >
              {feature}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <UserCard
            key={member.avatar}
            avatar={member.avatar}
            name={member.name}
            rank={member.rank}
            features={member.features}
          />
        ))}
      </div>
    </div>
  );
};
