const {defaults} = require("jest-config");

module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    transform: {},
};
