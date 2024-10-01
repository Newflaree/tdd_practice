import { sortArray } from '../src';


describe( 'SortArray function', () => {
  test( 'Should return [1, 2, 3, 5, 8] for input [5, 3, 8, 1, 2]', () => {
    expect( sortArray([ 5, 3, 8, 1, 2 ]) ).toEqual( [ 1, 2, 3, 5, 8 ] );
  });

  test( 'Should return [] for an empty array', () => {
    expect( sortArray([]) ).toEqual( [] );
  });

  test( 'Should return [1] for input [1]', () => {
    expect( sortArray([ 1 ]) ).toEqual( [ 1 ] );
  });

  test( 'Should return [-5, 0, 2, 3, 4] for input [3, 4, -5, 0, 2]', () => {
    expect( sortArray([ 3, 4, -5, 0 ,2 ]) ).toEqual( [ -5, 0, 2, 3, 4 ] );
  });

  test( 'Should return [1.5, 2.5, 3.7] for input [3.7, 1.5, 2.5]', () => {
    expect( sortArray([ 3.7, 1.5, 2.5 ]) ).toEqual( [ 1.5, 2.5, 3.7 ] );
  });
});
