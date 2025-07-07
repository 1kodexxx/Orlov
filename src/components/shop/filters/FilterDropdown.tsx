import React, { useEffect, useRef, useState } from "react";

interface FilterDropdownProps {
  title: string;
  options: { id: string; label: string }[];
  activeDropdown: string | null;
  onToggle: (title: string) => void;
  onSelect: (selected: string[]) => void;
  resetSignal: number;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  options,
  activeDropdown,
  onToggle,
  onSelect,
  resetSignal,
}) => {
  const isOpen = activeDropdown === title;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [mobileContentHeight, setMobileContentHeight] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  useEffect(() => {
    setSelectedOptions([]);
    onSelect([]);
  }, [resetSignal, onSelect]);

  const handleCheckboxChange = (id: string) => {
    let updatedOptions: string[] = [];

    if (selectedOptions.includes(id)) {
      updatedOptions = selectedOptions.filter((option) => option !== id);
    } else {
      updatedOptions = [...selectedOptions, id];
    }

    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

  const handleReset = () => {
    setSelectedOptions([]);
    onSelect([]);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMobileContentHeight(contentRef.current.scrollHeight);
    } else {
      setMobileContentHeight(0);
    }
  }, [isOpen, selectedOptions]);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      {/* Десктоп версия */}
      <div className="hidden sm:block">
        <button
          onClick={() => onToggle(title)}
          className="flex items-center gap-2 border-b border-secondary pb-1 text-text-primary transition hover:border-primary cursor-pointer">
          <span className="text-sm font-medium">{title}</span>
          <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 z-50 w-64 rounded-sm border border-secondary bg-background-paper">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-text-secondary">
                {selectedOptions.length} выбрано
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-text-primary underline underline-offset-4">
                Сбросить
              </button>
            </header>
            <ul className="space-y-1 border-t border-secondary p-4">
              {options.map((o) => (
                <li key={o.id}>
                  <label
                    htmlFor={o.id}
                    className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <input
                        type="checkbox"
                        id={o.id}
                        checked={selectedOptions.includes(o.id)}
                        onChange={() => handleCheckboxChange(o.id)}
                        className="peer hidden"
                      />
                      <div className="w-5 h-5 border-2 border-secondary rounded-sm bg-background transition-colors peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                        {selectedOptions.includes(o.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="3"
                            stroke="#1a1a1a"
                            className="w-4 h-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-text-secondary">
                      {o.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Мобильная версия */}
      <div className="sm:hidden">
        <button
          onClick={() => onToggle(title)}
          className="w-full flex justify-between items-center border-b pb-1">
          <span>{title}</span>
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen ? `${mobileContentHeight}px` : "0px",
          }}>
          <div ref={contentRef} className="pt-2 space-y-2">
            {options.map((o) => (
              <label
                key={o.id}
                className="flex items-center gap-2 cursor-pointer select-none">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(o.id)}
                    onChange={() => handleCheckboxChange(o.id)}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 border-2 border-secondary rounded-sm bg-background transition-colors peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                    {selectedOptions.includes(o.id) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3"
                        stroke="#1a1a1a"
                        className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span>{o.label}</span>
              </label>
            ))}
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-text-primary underline underline-offset-4">
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
