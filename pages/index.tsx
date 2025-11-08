import IMAGE from "@/public/assets/Image 1.png";
import Rooms from "@/public/assets/rooms.png";
import Mansion from "@/public/assets/mansion.png";
import Countryside from "@/public/assets/Countryside.png";
import Villa from "@/public/assets/villa.png";
import Tropical from "@/public/assets/tropical.png";
import New from "@/public/assets/new.png";
import AmazingPool from "@/public/assets/amazing pool.png";
import BeachHouse from "@/public/assets/beach houses.png";
import Camping from "@/public/assets/cabins.png";
import Apartment from "@/public/assets/apartment 1.png";
import House from "@/public/assets/home.png";
import Lakefront from "@/public/assets/lakefront.png";
import FarmHouse from "@/public/assets/Farm  house.png";
import TreeHouse from "@/public/assets/treehouse.png";
import Cabins from "@/public/assets/cabins.png";
import Castles from "@/public/assets/castles.png";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-[95%]">
        <ul
          className="
          sticky top-0 z-20 w-full bg-white/80 backdrop-blur
          flex items-center gap-6 overflow-x-auto py-3 px-4 md:px-8
          snap-x snap-mandatory
          [-ms-overflow-style:'none'] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
        >
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Rooms}
              alt="Rooms"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Rooms</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Mansion}
              alt="Mansion"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Mansion</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Countryside}
              alt="Countryside"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Countryside</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Villa}
              alt="Villa"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Villa</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Tropical}
              alt="Tropical"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Tropical</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={New}
              alt="New"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">New</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={AmazingPool}
              alt="Amazing pool"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Amazing pool</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={BeachHouse}
              alt="Beach house"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Beach house</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Camping}
              alt="Camping"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Camping</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Apartment}
              alt="Apartment"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Apartment</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={House}
              alt="House"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">House</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Lakefront}
              alt="Lakefront"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Lakefront</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={FarmHouse}
              alt="Farm house"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Farm house</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={TreeHouse}
              alt="Treehouse"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Treehouse</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Cabins}
              alt="Cabins"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Cabins</span>
          </li>
          <li className="flex flex-col items-center justify-center shrink-0 snap-start text-sm text-gray-600 hover:text-black transition">
            <Image
              src={Castles}
              alt="Castles"
              width={32}
              height={32}
              className="mb-1"
            />
            <span className="whitespace-nowrap">Castles</span>
          </li>
        </ul>
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex flex-col justify-center items-center text-center text-white overflow-hidden rounded-3xl">
          <Image
            src={IMAGE}
            alt="Find your favorite place"
            fill
            priority
            className="object-cover object-center brightness-50"
          />
          <div className="relative z-10 px-6">
            <h1
              className="font-semibold text-5xl md:text-7xl lg:text-8xl leading-tight"
              style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
            >
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-xl mt-4">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </section>

        {/* Property Listing Section */}
        <section className="py-12 px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <Card key={index} {...property} />
            ))}
          </div>
        </section>

        {/* Show More Section */}
        <section className="flex flex-col items-center justify-center pb-12 space-y-3">
          <button
            className="bg-black text-white w-[170px] h-[51px] rounded-full px-8 py-3 flex items-center justify-center gap-2 hover:bg-gray-900 transition"
            onClick={() => console.log("Show more clicked")}
          >
            Show more
          </button>
          <p className="font-quicksand text-[18px] md:text-[20px] leading-none tracking-normal text-center">
            Click to see more listings
          </p>
        </section>
      </div>
    </main>
  );
}
