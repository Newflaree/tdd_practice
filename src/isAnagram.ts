export const isAnagram = ( firstString: string, secondString: string ): boolean => {
  const formatString = ( string: string ) => string
    .replace( /[\s]/, '' )
    .toLowerCase()
    .split( '' )
    .sort()
    .join( '' );

    return formatString( firstString ) === formatString( secondString );
}
