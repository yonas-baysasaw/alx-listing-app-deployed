import ALX_LOGO from "@/public/assets/alx-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="bg-[#34967c] w-full h-[29px]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Image
              src={ALX_LOGO}
              alt="ALX logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <p className="mt-6 max-w-md text-sm leading-6 text-neutral-400">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider">
              Explore
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Hotels in New York
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Villa in Spain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider">
              Company
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Brand
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider">
              Help
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Cancel booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  Refunds Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-neutral-500">
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details here
            </p>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <li>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Policy service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
