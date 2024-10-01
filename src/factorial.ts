export const factorial = ( number: number ): number => {
  if ( number === 0 ) return 1;

  return number * factorial( number - 1 );
}
