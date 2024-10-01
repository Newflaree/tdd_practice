export const sumArray = ( numbers: number[] ): number => {
  return numbers.reduce( ( acumulator, current ) => acumulator + current, 0 );
}
