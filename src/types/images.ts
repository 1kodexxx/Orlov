export interface BackgroundImage {
  id: string;
  src: string;
  alt?: string;
  position?: "left" | "center" | "right" | "top" | "bottom"; // ограничиваем валидные позиции
  size?: "cover" | "contain" | string; // допускаем кастомный размер
  repeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y"; // конкретные варианты
  overlayColor?: string;
  brightness?: number; // 1 = 100%
  blur?: boolean;
}

export interface LogoImage {
  id: string;
  src: string;
  alt?: string;
  width?: number | string; // поддерживаем 'auto' и '100%'
  height?: number | string;
  className?: string;
}
