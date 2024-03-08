import { QueryStringProps } from "src/services/interface";

export function toQueryString(params: QueryStringProps): string | null {
  const query = new URLSearchParams(params).toString();
  return query ? `?${query}` : "";
}

export const getDayOfWeekAbbreviation = (dateString: string, short: boolean = true): string => {
  const date = new Date(dateString);

  let days;
  if (short) {
    days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  } else {
    days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  }

  const dayOfWeek = date.getDay();
  return days[dayOfWeek];
};