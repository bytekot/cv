import { filterBy } from '../src/utils'

test('Filter test array with filterBy()', () => {
    expect(filterBy(['foo', 'bar', 'win', 'amp'], 'a')).toEqual(['bar', 'amp'])
})
