/**
export const fibonacci = ( number: number ): number => {
  if ( number < 0 ) {
    throw new Error( 'Input must be a nom-negative integer' );
  }

  if ( number === 0 ) return 0;
  if ( number === 1 ) return 1;

  return fibonacci( number -1 ) + fibonacci( number - 2 );
}
 */

export const fibonacci = (
  number: number,
  memo: Record<number, number>  = {}
): number => {
  if ( number < 0 ) {
    throw new Error( 'Input must be a nom-negative integer' );
  }

  if ( number in memo ) return memo[number];
  if ( number === 0 ) return 0;
  if ( number === 1 ) return 1;

  memo[number] = fibonacci( number -1, memo ) + fibonacci( number - 2, memo );

  return memo[number];
}
