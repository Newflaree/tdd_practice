import { isAnagram } from '../src';


describe( 'IsAnagram function', () => {
  test( 'Should return true for "listen" and "silent"', () => {
    expect( isAnagram( 'listen', 'silent' ) ).toBe( true );
  });

  test( 'Should return false for "hello" and "world"', () => {
    expect( isAnagram( 'hello', 'world' ) ).toBe( false );
  });

  test( 'Should return true for "anagram" and "nagaram"', () => {
    expect( isAnagram( 'anagram', 'nagaram' ) ).toBe( true );
  });

  test( 'Should return false for "rat" and "car"', () => {
    expect( isAnagram( 'rat', 'car' ) ).toBe( false );
  });

  test( 'Should return true for "Astronomer" and "Moon starer"', () => {
    expect( isAnagram( 'Astronomer', 'Moon starer' ) ).toBe( true );
  });

  test( 'Should return false for "a" and "" (one empty string)', () => {
    expect( isAnagram( 'a', '' ) ).toBe( false );
  });
});
