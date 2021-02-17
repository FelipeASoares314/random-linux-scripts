const factory = require('../src/strategies/fac')
const Helper = require('../src/strategies/Helper')
const SetIssue = require('../src/strategies/SetIssue')
const RemoveIssue = require('../src/strategies/RemoveIssue')

test('should return helper when unknown "abc" strategy is passed', () => {
  expect(factory('abc')).toBeInstanceOf(Helper)
})

test('should return set issue when strategy "set" is passed', () => {
  expect(factory('set')).toBeInstanceOf(SetIssue)
})

test('should return remove issue when strategy "rm" is passed', () => {
  expect(factory('rm')).toBeInstanceOf(RemoveIssue)
})