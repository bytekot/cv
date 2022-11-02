import { filterBy, getPeriodText, beautifyDate } from '../src/utils'

test('Test filterBy()', () => {
    expect(
        filterBy(['foo', 'bar', 'win', 'amp'], 'a')
    )
    .toEqual(['bar', 'amp'])
})

test('Test getPeriodText()', () => {
    expect(
        getPeriodText('1990-06', '2008-06')
    )
    .toBe('18 years')

    expect(
        getPeriodText('2014-03', '2022-11')
    )
    .toBe('8 years 8 months')

    expect(
        getPeriodText('2000-01', '2001-02')
    )
    .toBe('1 year 1 month')

    expect(
        getPeriodText('2010-01', '2010-02')
    )
    .toBe('1 month')
})

test('Test beautifyDate()', () => {
    expect(
        beautifyDate('2022-11')
    )
    .toBe('November 2022')
})
