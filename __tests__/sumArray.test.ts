import { sumArray } from '../src';


describe( 'sumArray', () => {
  test( 'Should return 15 for input [ 1, 2, 3, 4, 5 ]', () => {
    expect( sumArray([ 1, 2, 3, 4, 5 ]) ).toBe( 15 );
  });

  test( 'Should return 0 for an empty array', () => {
    expect( sumArray([]) ).toBe( 0 );
  });

  test( 'Should return -3 for input [ -1, -1, -1 ]', () => {
    expect( sumArray([ -1, -1, -1 ]) ).toBe( -3 );
  });

  test( 'Should return 10 for input [ 10 ]', () => {
    expect( sumArray([ 10 ]) ).toBe( 10 );
  });

  test( 'Should return 6 for input [ 1.5, 2.5, 2 ]', () => {
    expect( sumArray([ 1.5, 2.5, 2 ]) ).toBe( 6 );
  });
});
