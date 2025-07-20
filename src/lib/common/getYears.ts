export interface StartDate {
  year: number;
  month: number;
  date: number;
}

export const getYears = (startDate: StartDate, type: string): number => {
  //今日
  const today = new Date();

  //今年の開始日
  const thisYearsStartDate = new Date(
    today.getFullYear(),
    startDate.month - 1,
    startDate.date
  );

  let years = today.getFullYear() - startDate.year;

  if (type !== "birthday") {
    years++;
  }

  if (today < thisYearsStartDate) {
    years--;
  }

  return years;
};
