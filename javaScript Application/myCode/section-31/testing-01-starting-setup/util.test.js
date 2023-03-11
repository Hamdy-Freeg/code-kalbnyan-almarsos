const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('hamdy', 22);
  expect(text).toBe('hamdy (22 years old)');
});

// test('should')
