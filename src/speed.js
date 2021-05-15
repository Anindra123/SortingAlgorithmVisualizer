export const sleep = (miliSec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miliSec);
  });
};
