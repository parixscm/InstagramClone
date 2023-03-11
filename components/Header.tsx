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
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="sticky top-0 border-b shadow-sm z-50 bg-white">
      <div className="mx-5 max-w-6xl flex justify-between bg-white lg:mx-auto">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="hidden w-24 relative cursor-pointer lg:inline-grid"
        >
          <Image
            src="https://links.papareact.com/ocw"
            alt="logo_lg"
            fill
            className="object-contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="w-10 flex-shrink-0 relative cursor-pointer lg:hidden"
        >
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
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
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
                onClick={() => signOut()}
                src={session?.user?.image!}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
