import getSounds from './soundUtils';

describe('getSounds()', () => {
  it('should return audio object with correct path when give type', () => {
    expect(getSounds('hint')[0].src).toMatch(/hint.ogg/);
  });

  it('should return same number of audio objects more than one type is given', () => {
    expect(getSounds('hint', 'no-hint')).toHaveLength(2);
  });
});
