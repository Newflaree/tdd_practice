import { findPair } from '../src';


describe( 'FindPair function', () => {
  test( 'Should return [4, 5] for array [1, 2, 3, 4, 5] with target 9', () => {
    expect( findPair( [ 1, 2, 3, 4, 5 ], 9 ) ).toEqual([ 4, 5 ]);
  });

  test( 'Should return a pair that sums up to 6 for array [1, 2, 3, 4, 5]', () => {
    const result = findPair( [1, 2, 3, 4, 5], 6 );
    expect( result ).not.toBeNull();
    
    if ( result ) {
      const [ a, b ] = result;
      expect( a + b ).toBe( 6 );
    }
  });

  test( 'Should return null if no pairs is found', () => {
    expect( findPair( [ 1, 2, 3 ], 10 ) ).toBeNull();
  });

  test( 'Should return [2, 2] for array [2, 2, 4] with target 4', () => {
    expect( findPair( [ 2, 2, 4 ], 4 ) ).toEqual([ 2, 2 ]);
  });
});
