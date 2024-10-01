export const findPair = ( array: number[], target: number ): [number, number] | null => {
  const seen = new Map<number, number>();

  for ( const num of array ) {
    const complement = target - num;

    if ( seen.has( complement ) ) {
      return [complement, num];

    }
    seen.set( num, 1 );
  }

  return null;
}
