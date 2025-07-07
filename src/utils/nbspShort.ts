// utils/nbspShort.ts
export function nbspShort(text: string): string {
  // заменяем обычный пробел перед 1-буквенным словом на неразрывный
  return text.replace(/\s([вискИАОУСи])\s/gi, "\u00A0$1 ");
}
