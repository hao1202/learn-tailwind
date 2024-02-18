export const Job = ({ title, bgColor, icon }) => {
  return (
    <div
      className={`${bgColor} shadow-lg flex aspect-square flex-col items-center justify-center gap-1 rounded-lg p-4 text-[#281A51]`}
    >
      {icon}
      <p className="font-popi text-base font-medium">{title}</p>
    </div>
  );
};
