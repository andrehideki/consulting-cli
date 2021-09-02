import moment from 'moment';

export const format = (date: Date, format: string) => {
  return moment(date).format(format);
}