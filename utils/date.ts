//Write ts function that will crop date into day, month, year. It returns Date object.

export function cropDate(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
//handle when it overflows to next month
export function addDays(date: Date, numberOfDays: number): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + numberOfDays
  );
}
export function addMinutes(date: Date, numberOfMinutes: number): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes() + numberOfMinutes
  );
}

//

export function addMonth(date: Date, numberOfMonths: number): Date {
  console.log("Adding month: ", date, numberOfMonths);
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth() + numberOfMonths,
      date.getUTCDate()
    )
  );
}

export function correctDate(date: Date): Date {
  return addMinutes(date, -date.getTimezoneOffset());
}

export function cropDateTillMonth(date: Date) {
  console.log("Cropping date: ", date);
  const cropped = new Date(date.getFullYear(), date.getMonth(), 1);
  return addMinutes(cropped, 0);
}
