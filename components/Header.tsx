import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div>
      <div className="mx-5 max-w-6xl flex justify-between bg-white lg:mx-auto">
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
          <div className="mt-1 p-3 relative rounded-md bg-white">
            <div className="pl-3 flex items-center absolute inset-y-0 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 block w-full bg-gray-50 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn -rotate-45" />
            <div className="w-5 h-5 absolute -top-1 -right-2 flex items-center justify-center bg-red-400 rounded-full text-white text-xs animate-pulse">
              7
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
