import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div>
      <div className="max-w-6xl flex justify-between bg-white">
        {/* Logo */}
        <div className="hidden w-24 relative cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            alt="logo_lg"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-10 flex-shrink-0 relative cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            alt="logo_mobile"
            fill
            className="object-contain"
          />
        </div>

        {/* Search */}
        <div className="max-w-xs">
          <div className="mt-1 p-3 relative rounded-md bg-whitek">
            <div className="pl-3 flex items-center absolute inset-y-0 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 block w-full bg-gray-50 border-gray-300 rounded-md focus:ring-black focus:border-black  sm:text-sm"
            />
          </div>
        </div>

        {/* Buttons */}
      </div>
    </div>
  );
}

export default Header;
