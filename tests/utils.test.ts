import { filterBy, getPeriodText, beautifyDate } from '../src/utils'

test('Test filterBy()', () => {
    expect(
        filterBy(['foo', 'bar', 'win', 'amp'], 'a')
    )
        .toEqual(['bar', 'amp'])
})

test('Test getPeriodText()', () => {
    expect(
        getPeriodText({ startDate: '1990-06', endDate: '2008-06' })
    )
        .toBe('18 years')

    // expect(
    //     getPeriodText('2014-03', '2022-11')
    // )
    // .toBe('8 years 8 months')

    // expect(
    //     getPeriodText('2000-01', '2001-02')
    // )
    // .toBe('1 year 1 month')

    // expect(
    //     getPeriodText('2010-01', '2010-02')
    // )
    // .toBe('1 month')
})

test('Test beautifyDate()', () => {
    expect(
        beautifyDate('2022-11')
    )
        .toBe('November 2022')
})




// test('', () => {
//     const periods = [
//         { startDate: '2013-10', endDate: '2020-07' },
//         { startDate: '2021-03', endDate: '2022-03' },
//         { startDate: '2022-08', endDate: '' },
//     ]

//     expect(getTotalPeriodText(data)).toBe('8 years 3 months')
// })

// function getTotalPeriodText(periods: { startDate: string, endDate: string }[]): string { }