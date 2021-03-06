module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  preset: 'ts-jest',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts?$',
  testPathIgnorePatterns: ['test/utils/MockHelpers.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
