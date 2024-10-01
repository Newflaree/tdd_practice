import { factorial } from '../src';

describe( 'Factorial function', () => {
  test( 'Should return 120 for input 5', () => {
    expect( factorial( 5 ) ).toBe( 120 );
  });

  test( 'Should return 1 for input 0', () => {
    expect( factorial( 0 ) ).toBe( 1 );
  });
});
