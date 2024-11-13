"use client";

import { APP_NAME } from "@/app/utils/constants";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
interface NavbarProps {
  setSearch: (search: string) => void;
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

export default function Navbar({
  setSearch,
  showSidebar,
  setShowSidebar,
}: NavbarProps) {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-blue-800 px-4">
      {showSidebar ? (
        <AiOutlineMenuFold
          className="text-white hover:cursor-pointer mr-4"
          onClick={() => setShowSidebar(false)}
        />
      ) : (
        <AiOutlineMenu
          className="text-white hover:cursor-pointer mr-4"
          onClick={() => setShowSidebar(true)}
        />
      )}
      <div className="flex-1">
        <Link href="/" passHref legacyBehavior>
          <a className="btn btn-ghost text-xl text-white">{APP_NAME}</a>
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="night"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label> */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Ingredient"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
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
