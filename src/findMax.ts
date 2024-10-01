export const findMax = ( numbers: number[] ): number => {
  if ( numbers.length === 0 ) {
    throw new Error( 'Array cannot be empty' );
  }

  return Math.max( ...numbers );
}
