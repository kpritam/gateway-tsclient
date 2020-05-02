module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  preset: 'ts-jest',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts?$',
  testPathIgnorePatterns: ['test/utils/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  verbose: true
}
