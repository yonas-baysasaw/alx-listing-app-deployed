import PROFILE from "@/public/assets/profile.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sign() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <div className="bg-[#34967c]  rounded-[46px] shrink-0">
          <Image src={PROFILE} alt="profile" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm rounded-full border border-black/10">
            Sign in
          </button>
          <button className="px-4 py-2 text-sm rounded-full bg-[#34967c] text-white">
            Sign up
          </button>
        </div>
      )}
    </>
  );
}
