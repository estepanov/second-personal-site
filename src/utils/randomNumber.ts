export const randomNumberWithin = (num1: number, num2: number): number => {
  // Calculate minimum and maximum bounds
  const minBound = Math.min(num1, num2);
  const maxBound = Math.max(num1, num2);

  // Generate a random number within the bounds
  const randomNumber = Math.random() * (maxBound - minBound) + minBound;

  return Math.floor(randomNumber);
};
