import getTimeAsAMPM from './dateUtils';

describe('getTimeAsAMPM()', () => {
  it('should be correct time format if time is AM', () => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(1999, 3, 21, 11, 30));
    expect(getTimeAsAMPM('')).toMatch(/(\d{1,2}):(\d{1,2}) AM/);
  });

  it('should be correct time format if time is PM', () => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(1999, 3, 21, 12, 4));
    expect(getTimeAsAMPM('')).toMatch(/(\d{1,2}):(\d{1,2}) PM/);
  });
});
