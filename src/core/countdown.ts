import { Time } from "../model";

const getTimeNow = () => {
  const now = new Date();

  const timeNow: Time = {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };

  return timeNow;
};

export { getTimeNow };
