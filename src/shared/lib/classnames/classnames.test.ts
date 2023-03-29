import { classnames } from './classnames';

describe('classnames', function () {
    test('with only 1 param', () => {
        expect(classnames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        expect(classnames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });

    test('with mods', () => {
        expect(classnames(
            'someClass',
            { mod1: true, mod2: true, mod3: false },
            ['add1', 'add2'])).toBe('someClass mod1 mod2 add1 add2');
    });

    test('with mod undefined', () => {
        expect(classnames(
            'someClass',
            { mod1: true, mod2: undefined },
            ['add1'])).toBe('someClass mod1 add1');
    });
});