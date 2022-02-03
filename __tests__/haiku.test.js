import Haiku from '../src/js/haiku.js';

describe('Haiku', () => {
  
  let haiku1;

  beforeEach(() => {
    haiku1 = new Haiku("first line","second line","third line")
  });

  test('Should create object with three strings', () => {
    expect(haiku1.line1).toEqual("first line")
    expect(haiku1.line2).toEqual("second line")
    expect(haiku1.line3).toEqual("third line")
  });


});
