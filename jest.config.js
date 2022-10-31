module.exports = {
  testEnvironment: 'jsdom', //para dizer qual é o tipo de ambiente que tera para testes. nesse caso (jsdom) simula o dom do browser
  testPathIgnorePatterns: ['/node_modules/', '/.next'], // ira ignorar essas pastas
  collectCoverage: true, //teste de cobertura para saber se esta cobrindo todos cenarios de testes
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'], // para saber quais testes precisa cobrir
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
