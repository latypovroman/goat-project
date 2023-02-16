import { classNames } from './classNames'

describe('classNames', () => {
    test('one default param', () => {
        expect(classNames('className')).toBe('className')
    })

    test('main class and additional class', () => {
        expect(classNames('className', {}, ['add1', 'add2']))
            .toBe('className add1 add2')
    })

    test('main class, additional class and options', () => {
        const testCase = classNames(
            'className',
            { red: true, blue: true },
            ['add1']
        )

        expect(testCase).toBe('className add1 red blue')
    })

    test('main class, additional class and options with false', () => {
        const testCase = classNames(
            'className',
            { red: false, blue: true },
            ['add1']
        )

        expect(testCase).toBe('className add1 blue')
    })
})
