"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState } from "react";
import AllIngredients from "@/app/(mainpage)/components/AllIngredients";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";
import IngredientInformation from "./components/IngredientInformation";

export default function Page({ params }: { params: { ingredient: string } }) {
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  if (params.ingredient !== "corn") {
    return (
      <div>
        <Navbar
          setSearch={setSearch}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="flex min-h-[calc(100vh-132px)] w-screen">
          <Sidebar showSidebar={showSidebar} />
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <p>No data of {params.ingredient}</p>
            <p>
              Only have a demo data of Corn{" "}
              <Link href="/ingredients/corn"><button className="btn btn-secondary btn-xs">Click Here</button></Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div className="flex min-h-[calc(100vh-132px)] w-screen">
        <Sidebar showSidebar={showSidebar} />
        <IngredientInformation ingredient={params.ingredient} />
      </div>
      <Footer />
    </div>
  );
}
