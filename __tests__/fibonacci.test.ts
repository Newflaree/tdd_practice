import { fibonacci } from '../src';


describe( 'Fibonacci function', () => {
  test( 'Should return 13 for input 7', () => {
    expect( fibonacci( 7 ) ).toBe( 13 );
  });

  test( 'Should return 0 for input 0', () => {
    expect( fibonacci( 0 ) ).toBe( 0 );
  });

  test( 'Should return 1 for input 1', () => {
    expect( fibonacci( 1 ) ).toBe( 1 );
  });

  test( 'Should return 1 for input 2', () => {
    expect( fibonacci( 2 ) ).toBe( 1 );
  });

  test( 'Should return 5 for input 5', () => {
    expect( fibonacci( 5 ) ).toBe( 5 );
  });

  test( 'Should throw an error for negative input', () => {
    expect( () => fibonacci( -1 ) ).toThrow( 'Input must be a nom-negative integer' );
  });
});
