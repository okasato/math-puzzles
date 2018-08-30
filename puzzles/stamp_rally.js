/*
math puzzle 2
stamp rally
*/

const stampRally = (numberOfsStaions, start, end) => {
  return 2 ** (Math.abs(start - end) - 1) + 2 ** (numberOfStaions - Math.abs(start - end) - 1) - 1;
}