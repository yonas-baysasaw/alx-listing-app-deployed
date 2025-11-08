import { PillProps } from "@/interfaces";
const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <li className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </li>
  );
};

export default Pill;
