import SEARCH from "@/public/assets/search.png";
import Image from "next/image";
export default function Search() {
  return (
    <ul className="flex items-center gap-4 rounded-full border border-black/10 px-4 py-2 shadow-sm">
      <li className="flex flex-col">
        <label htmlFor="location" className="text-xs text-gray-600">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Search for destination"
          className=" bg-transparent text-sm placeholder:text-gray-400 outline-none"
        />
      </li>

      <li className="flex flex-col">
        <label htmlFor="checkin" className="text-xs text-gray-600">
          Check in
        </label>
        <input
          id="checkin"
          type="date"
          className="bg-transparent text-sm placeholder:text-gray-400 outline-none"
          defaultValue={new Date().toISOString().split("T")[0]} // sets today's date
        />
      </li>

      <li className="flex flex-col">
        <label htmlFor="checkout" className="text-xs text-gray-600">
          Check out
        </label>
        <input
          id="checkout"
          type="date"
          placeholder="Add date"
          className="bg-transparent text-sm placeholder:text-gray-400 outline-none"
        />
      </li>

      <li className="flex flex-col">
        <label htmlFor="people" className="text-xs text-gray-600">
          People
        </label>
        <input
          id="people"
          type="text"
          placeholder="Add guest"
          className="w-28 bg-transparent text-sm placeholder:text-gray-400 outline-none"
        />
      </li>

      <li className="ml-auto size-[42px] rounded-full flex items-center justify-center bg-[#FFA800]">
        <Image
          className="h-5 w-5 object-contain shrink-0"
          src={SEARCH}
          alt="search"
        />
      </li>
    </ul>
  );
}
