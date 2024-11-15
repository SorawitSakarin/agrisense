import MultiLineChart from "@/app/(mainpage)/components/MultiLineChart";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import FactorInformation from "./FactorInformation";
import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

interface IngredientInformationProps {
  ingredient: string;
}

export default function IngredientInformation({
  ingredient,
}: IngredientInformationProps) {
  const thaiName = "ข้าวโพด";
  const datasets = [
    {
      label: dayjs().subtract(1, "year").format("YYYY"),
      data: Array.from({ length: 12 }, () =>
        faker.number.float({ min: 4, max: 13, fractionDigits: 2 })
      ),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: dayjs().format("YYYY"),
      data: Array.from({ length: 12 }, () =>
        faker.number.float({ min: 4, max: 13, fractionDigits: 2 })
      ),
      fill: false,
      borderColor: "rgb(192, 75, 192)",
      tension: 0.1,
    },
  ];

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "start-tour",
        popover: {
          title: `Welcome to ${ingredient} information page`,
          description:
            "This page is showing the information of ingredients. Don't forget that all information here is just demo data. Are you ready to start? Let's Go!!",
        },
      },
      {
        element: "#today-price",
        popover: {
          title: "Today Price",
          description:
            "The price of ingredients today. The unit is baht per tann.",
        },
      },
      {
        element: "#tomorrow-price",
        popover: {
          title: "Tomorrow Price By AI",
          description:
            "The price of ingredients Tomorrow. Just trust our AI!!. The unit is baht per tann.",
        },
      },
      {
        element: "#ingredient-statistics",
        popover: {
          title: "Price comparison",
          description:
            "The statistics of price of ingredients. It shows year on year, month on month, week on week, and day on day respectively.",
        },
      },
      {
        element: "#multi-line-chart",
        popover: {
          title: "Multi Line Chart",
          description:
            "The graph of ingredients price. It shows the past 24 months data.",
        },
      },
      {
        element: "#reference",
        popover: {
          title: "Relevant Factor Information",
          description:
            "The table gathers the relevant factor information which AI need to predict the price with the most accuracy.",
        },
      },
      {
        element: "end-tour",
        popover: {
          title: "Thanks for visiting",
          description:
            "This is the end of the tour. Hope you love AgriSense AI.",
        },
      },
    ],
  });

  useEffect(() => {
    driverObj.drive();
  }, []);
  return (
    <div className="bg-base-100 py-4 px-8 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 md:flex-row items-center">
        <div className="text-3xl font-bold flex-1">
          <p>
            {thaiName} ({ingredient}){" "}
          </p>
          <div id="today-price" className="badge">
            ราคาวันนี้ 11.3 บาท / ตัน
          </div>
        </div>
        <p className="text-xs">
          ข้อมูลล่าสุด {dayjs().format("DD-MM-YYYY HH:mm")}
        </p>
      </div>

      <div className="stats stats-vertical md:stats-horizontal shadow">
        <div id="tomorrow-price" className="stat">
          <div className="stat-figure text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-blue-500">Predict</div>
          <div className="stat-value text-blue-500">+0.8%</div>
          <div className=" text-blue-500 stat-desc">
            {dayjs().add(1, "day").format("DD-MM-YYYY")}: 12.5 บาท / ตัน
          </div>
        </div>
        <div id="ingredient-statistics" className="stat">
          <div className="stat-figure text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className=" text-red-500 stat-title">YOY</div>
          <div className=" text-red-500 stat-value text-red-500">+2.9%</div>
          <div className=" text-red-500 stat-desc">
            {dayjs().subtract(1, "year").format("YYYY")}: 8.5 บาท / ตัน
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-green-500">MOM</div>
          <div className="stat-value text-green-500">-2.1%</div>
          <div className=" text-green-500 stat-desc">
            {dayjs().subtract(1, "month").format("MMMM")}: 13.5 บาท / ตัน
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-green-500">WOW</div>
          <div className="stat-value text-green-500">-2.5%</div>
          <div className=" text-green-500 stat-desc">
            {dayjs().subtract(1, "week").format("DD-MM-YYYY")}: 13.8 บาท / ตัน
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-green-500">DOD</div>
          <div className="stat-value text-green-500">-1.2%</div>
          <div className=" text-green-500 stat-desc">
            {dayjs().subtract(1, "day").format("DD-MM-YYYY")}: 11.9 บาท / ตัน
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll">
        <div id="multi-line-chart" className="w-[800px] lg:w-[1000px]">
          <MultiLineChart
            datasets={datasets}
            title={`${thaiName} (${ingredient})`}
          />
        </div>
      </div>
      <FactorInformation />
    </div>
  );
}
