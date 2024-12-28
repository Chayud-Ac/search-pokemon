const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.(test|spec).[jt]s?(x)'],
};

module.exports = createJestConfig(customJestConfig);
