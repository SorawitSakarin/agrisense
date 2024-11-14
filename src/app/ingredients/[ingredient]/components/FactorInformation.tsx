import dayjs from "dayjs";

export default function FactorInformation() {
  return (
    <div className="flex flex-col gap-4 w-full pt-8">
      <p className="text-2xl font-bold">
        ข้อมูลอ้างอิง
      </p>
      <div className="overflow-x-auto w-[80vw]">
        <table className="table table-zebra">
          <thead className="font-bold text-md">
            <tr>
              <th>ตัวแปร</th>
              <th>{dayjs().subtract(1, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(2, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(3, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(4, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(5, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(6, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(7, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(8, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(9, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(10, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(11, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(12, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(13, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(14, "day").format("DD/MM/YYYY")}</th>
              <th>{dayjs().subtract(15, "day").format("DD/MM/YYYY")}</th>
            </tr>
          </thead>
          <tbody className="font-semibold text-sm">
            {Object.keys(factorData).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                {factorData[key].map((value) => (
                  <td key={value}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const factorData: Record<string, number[]> = {
  อุณหภูมิ: [25, 26, 27, 28, 25, 26, 27, 28, 26, 25, 27, 28, 25, 26, 27],
  ความชื้น: [80, 75, 77, 88, 66, 78, 86, 90, 76, 90, 85, 88, 77, 79, 80],
  ราคาน้ำมัน: [
    85.6, 86.3, 87.0, 85.9, 86.5, 87.1, 86.9, 86.2, 85.5, 86.8, 87.2, 86.7,
    86.1, 87.5, 86.9,
  ],
  "อัตราแรกเปลี่ยนเงิน US": [
    36.2, 36.1, 36.4, 36.3, 36.2, 36.5, 36.6, 36.4, 36.3, 36.7, 36.8, 36.9,
    36.6, 36.5, 36.3,
  ],
  ปริมาณน้ำฝน: [12, 0, 3, 8, 0, 15, 20, 5, 3, 6, 0, 12, 8, 10, 7],
  ราคาปุ๋ย: [
    500, 510, 505, 515, 520, 518, 525, 530, 527, 529, 532, 535, 530, 529, 533,
  ],
  "Ethanol demand index": [
    110, 112, 115, 114, 113, 115, 116, 117, 115, 113, 114, 118, 119, 120, 118,
  ],
  "Corn yield forecast": [
    175, 174, 173, 172, 170, 172, 174, 176, 175, 174, 173, 171, 170, 169, 170,
  ],
  "Water availability index": [
    0.7, 0.6, 0.8, 0.9, 0.7, 0.6, 0.8, 0.7, 0.6, 0.5, 0.8, 0.9, 0.8, 0.7, 0.6,
  ],
  "Export demand": [
    1.2, 1.1, 1.3, 1.2, 1.0, 1.3, 1.4, 1.2, 1.1, 1.3, 1.2, 1.0, 1.3, 1.4, 1.2,
  ],
  "Inventory levels": [
    200, 198, 197, 195, 193, 192, 191, 190, 189, 188, 187, 185, 184, 183, 182,
  ],
  "Biofuel policy change index": [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  "Corn futures volatility": [
    0.5, 0.7, 0.6, 0.8, 0.9, 0.7, 0.8, 0.6, 0.5, 0.9, 1.0, 0.8, 0.7, 0.9, 1.1,
  ],
};
