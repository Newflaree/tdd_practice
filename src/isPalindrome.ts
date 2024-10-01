export const isPalindrome = ( word: string ): boolean => {
  const sanitizedWord = word.replace( /[^a-zA-Z0-9]/g, '' ).toLowerCase();
  const reversedWord = sanitizedWord.split( '' ).reverse().join( '' );
  
  return sanitizedWord === reversedWord;
}
