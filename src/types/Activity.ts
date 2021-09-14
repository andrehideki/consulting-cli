export type Acitivity = {
  id: number;
  date: string;
  year: number;
  month: number;
  name: string;
  hours: number;
  status: string;
}

export type RegisterAcitivity = {
  name: string;
  tags: string[];
  date: string;
  amountOfHours: number;
  description: string;
  consultingId: number;
}