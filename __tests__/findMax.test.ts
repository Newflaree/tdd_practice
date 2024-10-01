import { findMax } from '../src';


describe( 'FindMax function', () => {
  test( 'Should throw an error for an empty array', () => {
    expect( () => findMax([]) ).toThrow( 'Array cannot be empty' );
  });

  test( 'Should return 20 for input [10, 20, 3, 7, 15]', () => {
    expect( findMax([ 10, 20, 3, 7, 15 ]) ).toBe( 20 );
  });

  test( 'Should return -1 for input [-10, -20, -3, -7, -1]', () => {
    expect( findMax([ -10, -20, -3, -7, -1 ]) ).toBe( -1 );
  });

  test( 'Should return 42 for input [42]', () => {
    expect( findMax([ 42 ]) ).toBe( 42 );
  });

  test( 'Should return 7.5 for input [3.5, 7.5, 2.2]', () => {
    expect( findMax([ 3.5, 7.5, 2.2 ]) ).toBe( 7.5 );
  });
});
