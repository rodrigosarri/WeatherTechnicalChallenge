import { QueryStringProps } from "src/services/interface";

export function toQueryString(params: QueryStringProps): string | null {
  const query = new URLSearchParams(params).toString();
  return query ? `?${query}` : "";
}

export const getDayOfWeekAbbreviation = (dateString: string): string => {
  const date = new Date(dateString);
  const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const dayOfWeek = date.getDay();
  return days[dayOfWeek];
}