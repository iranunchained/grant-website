export const formatTimeAgo = (date: Date | number) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (dateObj.getTime() - Date.now()) / 1000;

  for (let key in ranges) {
    if (ranges[key as keyof typeof ranges] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key as keyof typeof ranges];

      return formatter.format(Math.round(delta), key as keyof typeof ranges);
    }
  }
};
