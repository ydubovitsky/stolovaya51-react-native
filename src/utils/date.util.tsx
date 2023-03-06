import moment from "moment";

export interface CustomDateInterface {
  day: string,
  month: string,
  year: number
}

export const convertDateToCustomDate = (date: Date) : CustomDateInterface => {
  return {
    day: `${date.getDate()}`.padStart(2, "0"),
    month: `${date.getMonth() + 1}`.padStart(2, "0"),
    year: date.getFullYear()
  }
}

export const getFormattedDateString = (date: Date, format: string) : string => {
  return moment(date).format(format);
}