import { removeDuplicates } from '../src';


describe( 'RemoveDuplecates function', () => {
  test( 'Should return [1, 2, 3, 4, 5] for input [1, 2, 2, 3, 4, 4, 5]', () => {
    expect( removeDuplicates([ 1, 2, 2, 3, 4, 4, 5 ]) ).toEqual([1, 2, 3, 4, 5]);
  });

  test( 'Should return [1] for input [1, 1, 1, 1]', () => {
    expect( removeDuplicates([ 1, 1, 1, 1 ]) ).toEqual( [ 1 ] );
  });

  test( 'Should return [3, 5, 7] for input [3, 3, 5, 5, 7, 7]', () => {
    expect( removeDuplicates([ 3, 3, 5, 5, 7, 7 ]) ).toEqual( [ 3, 5, 7 ] );
  });

  test( 'Should return [] for an empty array', () => {
    expect( removeDuplicates([]) ).toEqual( [] );
  });

  test( 'Should return [1, 2, 3, 4, 5] for input [1, 2, 3, 4, 5]', () => {
    expect( removeDuplicates([ 1, 2, 3, 4, 5 ]) ).toEqual( [ 1, 2, 3, 4, 5 ] );
  });
});
