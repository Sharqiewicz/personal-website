module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
        "^.+\\.(css|less|scss)$": "babel-jest",
    },
    testEnvironment: "jsdom"
};