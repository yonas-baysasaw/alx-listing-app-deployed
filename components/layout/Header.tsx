import Image from "next/image";
import CASE from "@/public/assets/Case Minimalistic.png";
import BLACK_LOGO from "@/public/assets/alx_logo_black.png";
import SEARCH from "@/public/assets/search.png";
import Sign from "./Sign";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#34967c] h-12 w-full flex justify-center items-center px-4">
        <Image src={CASE} alt="case" className="mr-2 h-5 w-5" />
        <p className="text-white text-sm text-center">
          Overseas trip? Get the latest information on travel guides
        </p>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex mx-auto mt-4 max-w-6xl items-center justify-between gap-4 px-4">
        <Image src={BLACK_LOGO} alt="alx logo" className="h-6 w-auto" />

        {/* Search Bar */}
        <ul className="flex flex-1 items-center gap-4 rounded-full border border-black/10 px-4 py-2 shadow-sm">
          <li className="flex flex-col">
            <label htmlFor="location" className="text-xs text-gray-600">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Search for destination"
              className="w-44 bg-transparent text-sm placeholder:text-gray-400 outline-none"
            />
          </li>

          <li className="flex flex-col">
            <label htmlFor="checkin" className="text-xs text-gray-600">
              Check in
            </label>
            <input
              id="checkin"
              type="date"
              placeholder="Add date"
              className="bg-transparent text-sm placeholder:text-gray-400 outline-none"
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

          <li className="ml-auto h-[42px] w-[42px] rounded-full flex items-center justify-center bg-[#FFA800]">
            <Image className="h-5 w-5" src={SEARCH} alt="search" />
          </li>
        </ul>

        <Sign />
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center px-4 mt-4">
        {/* Search Bar (Compact) */}
        <div className="flex flex-1 items-center justify-between rounded-full border border-black/10 px-4 py-3 shadow-sm">
          <div className="flex flex-col">
            <label className="text-xs font-medium">Where to</label>
            <span className="text-sm text-gray-400">
              Location • Date • Add guest
            </span>
          </div>
          <div className="h-[38px] w-[38px] rounded-full flex items-center justify-center bg-[#FFA800] ml-2">
            <Image className="h-5 w-5" src={SEARCH} alt="search" />
          </div>
        </div>

        {/* Profile Icon */}
        <div className="ml-3">
          <Sign />
        </div>
      </div>
    </header>
  );
}
