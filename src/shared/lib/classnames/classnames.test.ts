import { classnames } from './classnames';

describe('classnames', function () {
    test('with only 1 param', () => {
        expect(classnames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expectedResult = 'someClass add1 add2';
        expect(classnames(
            'someClass',
            {},
            ['add1', 'add2']),
        ).toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass mod1 mod2 add1 add2';
        expect(classnames(
            'someClass',
            { mod1: true, mod2: true, mod3: false },
            ['add1', 'add2']),
        ).toBe(expectedResult);
    });

    test('with mod undefined', () => {
        const expectedResult = 'someClass mod1 add1';
        expect(classnames(
            'someClass',
            { mod1: true, mod2: undefined },
            ['add1']),
        ).toBe(expectedResult);
    });
});