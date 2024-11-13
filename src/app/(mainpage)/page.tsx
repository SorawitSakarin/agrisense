"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState } from "react";
import AllIngredients from "@/app/(mainpage)/components/AllIngredients";
import Sidebar from "@/app/components/sidebar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div className="flex min-h-[calc(100vh-132px)] w-screen">
        <Sidebar showSidebar={showSidebar}/>
        <AllIngredients search={search} />
      </div>
      <Footer />
    </div>
  );
}
