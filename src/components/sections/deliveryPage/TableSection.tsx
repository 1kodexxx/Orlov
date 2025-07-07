import React from "react";

const deliveryOptions = [
  { region: "Москва и область", time: "1–2 дня", price: "300 ₽" },
  { region: "Россия (другие регионы)", time: "3–7 дней", price: "500 ₽" },
  { region: "Международная", time: "7–21 день", price: "от 1500 ₽" },
];

const TableSection: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center py-16 px-4 max-w-[1280px] mx-auto">
    {/* Desktop table */}
    <div className="hidden md:block relative overflow-x-auto shadow-md sm:rounded-2xl bg-background-paper">
      <table className="w-full text-base text-left text-text-secondary">
        <thead className="text-sm text-text-primary bg-secondary">
          <tr>
            <th className="px-6 py-4">Регион</th>
            <th className="px-6 py-4">Сроки</th>
            <th className="px-6 py-4">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {deliveryOptions.map((opt, i) => (
            <tr
              key={i}
              className="border-b border-secondary hover:bg-background-default transition-colors">
              <td className="px-6 py-4">{opt.region}</td>
              <td className="px-6 py-4">{opt.time}</td>
              <td className="px-6 py-4">{opt.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <div className="md:hidden space-y-6">
      {deliveryOptions.map((opt, i) => (
        <div
          key={i}
          className="p-4 bg-background-paper rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <p className="text-text-primary font-semibold mb-2">{opt.region}</p>
          <div className="flex justify-between text-text-secondary">
            <span>Сроки: {opt.time}</span>
            <span>Цена: {opt.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TableSection;
