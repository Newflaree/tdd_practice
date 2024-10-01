import { isPalindrome } from '../src';


describe( 'isPalindrome function', () => {
  test( 'Should return true for input "radar"', () => {
    expect( isPalindrome( 'radar' ) ).toBe( true );
  });

  test( 'Should return false for input "hello"', () => {
    expect( isPalindrome( 'hello' ) ).toBe( false );
  });

  test( 'Should return true for input "A man a plan a canal Panama"', () => {
    expect( isPalindrome( 'A man a plan a canal Panama' ) ).toBe( true );
  });

  test( 'Should return false for input "1234"', () => {
    expect( isPalindrome( '1234' ) ).toBe( false );
  });

  test( 'Should return true for input "12321"', () => {
    expect( isPalindrome( '12321' ) ).toBe( true );
  });
});
