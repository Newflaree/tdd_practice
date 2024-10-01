import { invertString } from '../src';


describe( 'InvertString function', () => {
  test( 'Should return "olleh" for input "hello"', () => {
    expect( invertString( 'hello' ) ).toBe( 'olleh' );
  });

  test( 'Should return "dcba" for input "abcd"', () => {
    expect( invertString( 'abcd' ) ).toBe( 'dcba' );
  });

  test( 'Should return "" for input ""', () => {
    expect( invertString( 'abcd' ) ).toBe( 'dcba' );
  });
});
