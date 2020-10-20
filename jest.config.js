module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
}