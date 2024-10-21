import { romanToInteger } from "./romanToInteger";

describe('Roman to integer', () => {
  test('Should be convert III to 3', () => {
    const romanConvertedToInteger = romanToInteger('III');

    expect(romanConvertedToInteger).toBe(3);
  });

  test('Should be convert X to 10', () => {
    const romanConvertedToInteger = romanToInteger('X');

    expect(romanConvertedToInteger).toBe(10);
  });

  test('Should be convert VI to 6', () => {
    const romanConvertedToInteger = romanToInteger('VI');

    expect(romanConvertedToInteger).toBe(6);
  });

  test('Should be convert IV to 4', () => {
    const romanConvertedToInteger = romanToInteger('IV');

    expect(romanConvertedToInteger).toBe(4);
  });

  test('Should be convert L to 50', () => {
    const romanConvertedToInteger = romanToInteger('L');

    expect(romanConvertedToInteger).toBe(50);
  });

  test('Should be convert C to 100', () => {
    const romanConvertedToInteger = romanToInteger('C');

    expect(romanConvertedToInteger).toBe(100);
  });

  test('Should be convert D to 500', () => {
    const romanConvertedToInteger = romanToInteger('D');

    expect(romanConvertedToInteger).toBe(500);
  });

  test('Should be convert M to 1000', () => {
    const romanConvertedToInteger = romanToInteger('M');

    expect(romanConvertedToInteger).toBe(1000);
  });
});