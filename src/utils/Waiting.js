export const Waiting = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
