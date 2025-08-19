module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
   // ⚠️ CRITICAL: Configurações para evitar problemas de concorrência
  maxWorkers: 1, // Força execução sequencial
  maxConcurrency: 1, // Máximo 1 teste por vez
  testTimeout: 30000, // 30 segundos de timeout
  moduleNameMapper: {
    '^app$': '<rootDir>/src/app.ts',
    '^api\\.v1/(.*)$': '<rootDir>/src/api.v1/$1',
    '^application/(.*)$': '<rootDir>/src/application/$1',
    '^commons/(.*)$': '<rootDir>/src/commons/$1',
    '^domain/(.*)$': '<rootDir>/src/domain/$1',
    '^infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
  },
};
