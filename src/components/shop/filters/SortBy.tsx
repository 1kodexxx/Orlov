import React, { useState, useRef, useEffect } from "react";

interface SortByProps {
  onSortChange: (sort: string) => void;
}

const sortOptions = [
  { value: "", label: "Сортировать по" },
  { value: "Title, DESC", label: "Название: от Я до А" },
  { value: "Title, ASC", label: "Название: от А до Я" },
  { value: "Price, DESC", label: "Цена: по убыванию" },
  { value: "Price, ASC", label: "Цена: по возрастанию" },
];

const SortBy: React.FC<SortByProps> = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Автозакрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange(option.value);
  };

  return (
    <div className="sort-by relative hidden sm:block " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-10 flex items-center justify-between gap-2 rounded-sm border border-secondary bg-background-paper text-sm text-text-secondary px-4 cursor-pointer">
        {selected.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-4 h-4 transition ${isOpen ? "rotate-180" : ""}`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-full mt-2 w-64 rounded-sm border border-secondary bg-background-paper shadow z-50">
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-secondary/30 cursor-pointer">
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortBy;
