export const removeDuplicates = ( numbers: number[] ): number[] => {
  return [ ...new Set( numbers ) ];
}
