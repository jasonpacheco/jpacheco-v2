const padTime = (t: number): string => t.toString().padStart(2, '0');

const getQueryTime = (): string => {
  const date = new Date();
  return `${padTime(date.getHours())}:${padTime(date.getMinutes())}:${padTime(
    date.getSeconds(),
  )}`;
};

export default getQueryTime;
