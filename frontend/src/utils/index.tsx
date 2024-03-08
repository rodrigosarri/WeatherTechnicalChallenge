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

export const getFormattedDate = (): string => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
};

export const getFormattedTime = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}h`;
};

export const getCurrentMonthAndDay = (): string => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const today = new Date();
  const month = months[today.getMonth()];
  const day = today.getDate().toString().padStart(2, "0");
  return `${month}, ${day}`;
};
