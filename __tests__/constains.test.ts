import { contains } from '../src';


describe( 'Contains function', () => {
  test( 'Should return true for impun([ 1, 2, 3, 4, 5 ], 3)', () => {
    expect( contains( [ 1, 2, 3, 4, 5 ], 3 ) ).toBe( true );
  });

  test( 'Should return false for impun([ 1, 2, 3, 4, 5 ], 6)', () => {
    expect( contains( [ 1, 2, 3, 4, 5 ], 6 ) ).toBe( false );
  });

  test( 'Should return true for impun([ "a", "b", "c" ], "b")', () => {
    expect( contains( [ 'a', 'b', 'c' ], 'b' ) ).toBe( true );
  });

  test( 'Should return false for impun([ "a", "b", "c" ], "d")', () => {
    expect( contains( [ 'a', 'b', 'c' ], 'd' ) ).toBe( false );
  });

  test( 'Should return true for impun([ true, false, true ], true )', () => {
    expect( contains( [ true, false, true ], true ) ).toBe( true );
  });

  test( 'Should return false for impun([ true, true, true ], false )', () => {
    expect( contains( [ true, true, true ], false ) ).toBe( false );
  });
});
