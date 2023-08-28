/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      __dirname + '/__mocks__/file-mock.ts',
    '\\.(s?css|less)$': __dirname + '/__mocks__/style-mock.ts',
  },
  rootDir: '../../',
  roots: ['<rootDir>', __dirname],
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
};
