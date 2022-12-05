export interface TouchParam {
  startY: number;
  endY: number;
  startTime: number;
  endTime: number;
  lastY: number;
  lastTime: number;
}

export type InputDate = string | string[];
export type StringArr = string[];

export interface CalendarState {
  yearMonthTitle: string;
  currDate: string | string[];
  propStartDate: string;
  propEndDate: string;
  currentIndex: number;
  unLoadPrev: boolean;
  touchParams: import('./type').TouchParam;
  transformY: number;
  translateY: number;
  scrollDistance: number;
  defaultData: InputDate;
  chooseData: (string | string[])[];
  monthsData: MonthInfo[];
  dayPrefix: string;
  startData: InputDate;
  endData: InputDate;
  isRange: boolean;
  timer: number;
  avgHeight: number;
  monthsNum: number;
  defaultRange: number[];
}
export interface Day {
  day: string | number;
  type: string;
}

export interface MonthInfo {
  curData: string[] | string;
  title: string;
  monthData: Day[];
  cssHeight: number;
  cssScrollHeight: number;
}
export interface Dateprop {
  year: string;
  month: string;
}
export interface DateInfo {
  year: string;
  month: string;
  day: string;
}

export interface MonthInfo {
  curData: string[] | string;
  title: string;
  monthData: Day[];
  cssHeight: number;
  cssScrollHeight: number;
}
