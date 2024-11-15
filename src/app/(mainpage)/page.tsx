"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useEffect, useState } from "react";
import AllIngredients from "@/app/(mainpage)/components/AllIngredients";
import Sidebar from "@/app/components/sidebar";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "start-tour",
        popover: {
          title: "Welcome to AgriSense AI",
          description:
            "This is a tour for demonstrating the concept of AgriSense AI. Are you ready to start?",
        },
      },
      {
        element: "#stat-yoy",
        popover: {
          title: "Year on year statistics",
          description:
            "These statistics show how the price of ingredients has changed over the past year",
        },
      },
      {
        element: "#stat-suggestion",
        popover: {
          title: "Suggestion By AI",
          description:
            "This is a suggestion from AI based on the best price devided by the ingredient category",
        },
      },
      {
        element: "#all-ingredients",
        popover: {
          title: "All ingredients",
          description: "These section shows all ingredients in our database",
        },
      },
      {
        element: "#supplier-table",
        popover: {
          title: "Suppliers Table",
          description:
            "These section shows all suppliers also the tomorrow price which predicted by AI",
        },
      },
      {
        element: "#link-to-ingredient",
        popover: {
          title: "Link to more",
          description:
            "You can see more information about this ingredient. Just Click it!!",
        },
      },
      {
        element: "#line-chart",
        popover: {
          title: "Let's see the pass abit",
          description:
            "The graph shows how the price of this ingredient has changed over the past 15 days",
        },
      },
      {
        element: "#search-input",
        popover: {
          title: "If you can't find the ingredient",
          description:
            "Just type here and we will show you the result. English and Thai are supported.",
        },
      },
      {
        element: "end",
        popover: {
          title: "End of tour in this page",
          description: "Don't forget to check out the another page",
        },
      },
    ],
  });

  useEffect(() => {
    const visited = localStorage.getItem("visited-mainpage");
    if (!visited) {
      driverObj.drive();
      localStorage.setItem("visited-mainpage", "true");
    }
  }, []);
  return (
    <div>
      <Navbar
        setSearch={setSearch}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div className="flex min-h-[calc(100vh-132px)] w-screen">
        <Sidebar showSidebar={showSidebar} />
        <AllIngredients search={search} />
      </div>
      <Footer />
    </div>
  );
}
