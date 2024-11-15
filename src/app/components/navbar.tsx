"use client";

import { APP_NAME } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
interface NavbarProps {
  setSearch?: (search: string) => void;
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

export default function Navbar({
  setSearch,
  showSidebar,
  setShowSidebar,
}: NavbarProps) {
  return (
    <div
      id="nav-bar"
      className="navbar bg-gradient-to-r from-blue-500 to-blue-800 px-4"
    >
      {showSidebar ? (
        <AiOutlineMenuFold
          className="hidden md:flex text-white hover:cursor-pointer mr-4"
          onClick={() => setShowSidebar(false)}
        />
      ) : (
        <AiOutlineMenu
          className="hidden md:flex text-white hover:cursor-pointer mr-4"
          onClick={() => setShowSidebar(true)}
        />
      )}
      <Link href="/">
        <Image
          src="/agrisense_ai.png"
          alt="Agrisense logo"
          className="bg-white rounded-full md:mr-2"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex-1">
        <Link href="/" passHref legacyBehavior>
          <a className="btn btn-ghost text-xl text-white">{APP_NAME}</a>
        </Link>
      </div>
      <div className="flex-none gap-2">
        {setSearch && (
          <div id="search-input" className="form-control">
            <input
              type="text"
              placeholder="Search Ingredient"
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
