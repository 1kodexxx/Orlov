interface ModelSelectorProps {
  models: string[];
  selected: string | null;
  onSelect: (model: string) => void;
}

export default function ModelSelector({
  models,
  selected,
  onSelect,
}: ModelSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-text-secondary">Модель</span>
      <div className="flex flex-wrap gap-2">
        {models.map((model) => (
          <button
            key={model}
            className={`px-3 py-1 rounded ${
              selected === model
                ? "bg-secondary text-primary"
                : "bg-background-paper text-text-secondary"
            } hover:bg-secondary hover:text-primary transition`}
            onClick={() => onSelect(model)}>
            {model}
          </button>
        ))}
      </div>
    </div>
  );
}
