interface ColorSelectorProps {
  colors: string[];
  selected: string | null;
  onSelect: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selected,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-text-secondary">Цвет</span>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className={`w-6 h-6 rounded-full border-2 ${
              selected === color ? "border-primary" : "border-secondary"
            }`}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
    </div>
  );
}
