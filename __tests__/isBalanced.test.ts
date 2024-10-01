import { isBalanced } from '../src';


describe( 'IsBalanced function', () => {
  test( 'Should return true for balanced parentheses "(())"', () => {
    expect( isBalanced( '(())' ) ).toBe( true );
  });

  test( 'Should return false for unbalanced parentheses "(()"', () => {
    expect( isBalanced( '(()' ) ).toBe( false );
  });

  test( 'Should return true for empty string', () => {
    expect( isBalanced( '' ) ).toBe( true );
  });

  test( 'Should return false for "())("', () => {
    expect( isBalanced( '())(' ) ).toBe( false );
  });

  test( 'Should return true for "()()"', () => {
    expect( isBalanced( '()()' ) ).toBe( true );
  });

  test( 'Should return true for "(()))("', () => {
    expect( isBalanced( '(()))(' ) ).toBe( false );
  });
});
