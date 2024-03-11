module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    snapshotSerializers: ['@emotion/jest/serializer'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },

};
