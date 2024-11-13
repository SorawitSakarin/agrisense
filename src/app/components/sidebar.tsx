import { LuLogOut } from "react-icons/lu";
import { TbLeaf } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";

interface SidebarProps {
  showSidebar: boolean;
}
export default function Sidebar({ showSidebar }: SidebarProps) {
//   if (showSidebar)
    return (
      <div className={` transform ease-in-out duration-300 flex flex-col px-4 pt-4 pb-2 relative justify-between text-sm font-semibold whitespace-nowrap shadow-lg border-r-2 border-gray-100`}>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center hover:cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg">
            <TbLeaf />
            {showSidebar ? <p>Ingredients</p> : ""}
          </div>
          <div className="flex gap-2 items-center hover:cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg">
            <LuPackage />
            {showSidebar ? <p>Products</p> : ""}
          </div>
        </div>
        <div className="border-t-2 border-gray-400 pt-2">
          <button className="flex gap-4 hover:cursor-pointer hover:bg-gray-200 px-2 py-3 rounded-lg w-full">
            <LuLogOut />
            {showSidebar ? <p>Logout</p> : ""}
          </button>
        </div>
      </div>
    );
}
