import dayjs from "dayjs";
import LineChart from "./LineChart";
import { faker } from "@faker-js/faker";

export default function AllIngredients({ search }: { search: string }) {
  const dateCountArray = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const days = dateCountArray.map((i) => {
    if (i === 0) return "Today";
    return dayjs().subtract(i, "day").format("DD/MM");
  });
  return (
    <div className="bg-base-100 py-4 px-8 flex flex-col gap-4 w-full">
      <div className="flex items-center">
        <p className="text-3xl font-bold flex-1">ภาพรวมวัตถุดิบ</p>
        <p className="text-xs">
          ข้อมูลล่าสุด {dayjs().format("DD/MM/YYYY HH:mm")}
        </p>
      </div>
      <div className="flex gap-4">
        <div className="h-[160px] w-1/3 bg-base-300 rounded-xl"></div>
        <div className="h-[160px] w-1/3 bg-base-300 rounded-xl"></div>
        <div className="h-[160px] w-1/3 bg-base-300 rounded-xl"></div>
      </div>
      {Object.values(INGREDIENT_DATA).map((ingredient) => {
        if (
          search &&
          !ingredient.thaiName.toLowerCase().includes(search.toLowerCase()) &&
          !ingredient.name.toLowerCase().includes(search.toLowerCase())
        )
          return null;
        return (
          <div
            key={ingredient.name}
            className="flex items-center gap-4 border-2 border-blue-200 rounded-xl"
          >
            <div className="flex-1 border-r-2 border-blue-100">
              <div className="h-[240px] w-full rounded-xl p-4">
                <div className="flex gap-4 justify-between">
                  <div className="flex gap-4">
                    <p className="font-semibold">
                      {ingredient.thaiName}: ({ingredient.name}){" "}
                    </p>
                    <div className="badge badge-outline">
                      <p>{ingredient.source}</p>
                    </div>
                  </div>
                  <p>ราคาวันนี้ {ingredient.price[13]} บาท/ตัน</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead className="font-bold text-md">
                      <tr>
                        <th></th>
                        <th>{faker.string.alpha(3).toUpperCase()}</th>
                        <th>{faker.string.alpha(3).toUpperCase()}</th>
                        <th>{faker.string.alpha(3).toUpperCase()}</th>
                      </tr>
                    </thead>
                    <tbody className="font-semibold text-sm">
                      <tr className="bg-base-300">
                        <th>พรุ่งนี้</th>
                        <td>{(ingredient.price[14] * 0.95).toFixed(1)} </td>
                        <td>{ingredient.price[14]} </td>
                        <td>{(ingredient.price[14] * 1.05).toFixed(1)} </td>
                      </tr>
                      <tr>
                        <th>วันนี้</th>
                        <td>{(ingredient.price[13] * 0.95).toFixed(1)} </td>
                        <td>{ingredient.price[13]} </td>
                        <td>{(ingredient.price[13] * 1.05).toFixed(1)} </td>
                      </tr>
                      <tr>
                        <th>เมื่อวาน</th>
                        <td>{(ingredient.price[12] * 0.95).toFixed(1)} </td>
                        <td>{ingredient.price[12]} </td>
                        <td>{(ingredient.price[12] * 1.05).toFixed(1)} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-[456px]">
              <div className="h-[240px] w-full rounded-xl p-2">
                <LineChart
                  days={[...days, "Tomorrow"]}
                  label={ingredient.thaiName}
                  dataValue={ingredient.price}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const INGREDIENT_DATA = {
  Corn: {
    name: "Corn",
    thaiName: "ข้าวโพด",
    source: "carbohydrate",
    price: [
      7.1, 7.0, 7.3, 7.1, 7.0, 7.3, 8.0, 8.3, 7.9, 8.0, 8.3, 7.9, 10.0, 11.3,
      7.9,
    ],
  },
  Cassava: {
    name: "Cassava",
    thaiName: "มันสำปะหลัง",
    source: "carbohydrate",
    price: [
      4.5, 4.3, 4.6, 4.4, 4.7, 4.6, 4.8, 5.1, 4.9, 5.0, 5.1, 4.9, 5.2, 5.3, 4.8,
    ],
  },
  Rice: {
    name: "Rice",
    thaiName: "ข้าว",
    source: "carbohydrate",
    price: [
      6.3, 6.2, 6.5, 6.3, 6.6, 6.5, 6.8, 6.7, 6.9, 6.6, 7.0, 6.8, 7.2, 6.9, 6.7,
    ],
  },
  ChickenMeal: {
    name: "Chicken Meal",
    thaiName: "เนื้อไก่อบแห้ง",
    source: "protein",
    price: [
      45.0, 44.5, 45.2, 44.8, 45.5, 45.0, 45.6, 45.4, 45.8, 45.7, 46.0, 45.9,
      45.3, 45.7, 45.8,
    ],
  },
  FishMeal: {
    name: "Fish Meal",
    thaiName: "ปลาป่น",
    source: "protein",
    price: [
      36.0, 35.8, 36.2, 36.1, 36.0, 35.5, 36.0, 35.7, 36.3, 36.0, 36.2, 35.8,
      36.5, 36.6, 36.4,
    ],
  },
  SoybeanMeal: {
    name: "Soybean Meal",
    thaiName: "กากถั่วเหลือง",
    source: "protein",
    price: [
      15.5, 15.3, 15.6, 15.4, 15.7, 15.6, 15.8, 16.0, 15.7, 15.9, 16.1, 16.0,
      15.9, 15.7, 16.2,
    ],
  },
  BeetPulp: {
    name: "Beet Pulp",
    thaiName: "กากบีทรูท",
    source: "fiber",
    price: [
      8.5, 8.4, 8.6, 8.7, 8.8, 8.5, 8.9, 8.7, 9.0, 8.8, 9.1, 8.9, 9.0, 8.8, 8.6,
    ],
  },
  FishOil: {
    name: "Fish Oil",
    thaiName: "น้ำมันปลา",
    source: "fat",
    price: [
      20.2, 20.0, 20.3, 20.4, 20.5, 20.3, 20.6, 20.4, 20.8, 20.7, 20.9, 20.6,
      20.5, 20.4, 20.3,
    ],
  },
  Flaxseed: {
    name: "Flaxseed",
    thaiName: "เมล็ดแฟลกซ์",
    source: "fat",
    price: [
      12.0, 11.8, 12.1, 12.2, 12.3, 12.0, 12.4, 12.2, 12.6, 12.4, 12.7, 12.3,
      12.2, 12.1, 12.3,
    ],
  },
  VitaminsAndMinerals: {
    name: "Vitamins and Minerals",
    thaiName: "วิตามินและแร่ธาตุ",
    source: "supplement",
    price: [
      3.0, 3.1, 3.0, 3.2, 3.1, 3.0, 3.3, 3.1, 3.4, 3.2, 3.5, 3.4, 3.3, 3.1, 3.2,
    ],
  },
  Taurine: {
    name: "Taurine",
    thaiName: "ทอรีน",
    source: "amino acid",
    price: [
      18.0, 17.9, 18.2, 18.1, 18.3, 18.0, 18.4, 18.1, 18.5, 18.3, 18.6, 18.2,
      18.1, 18.4, 18.0,
    ],
  },
};
