const SetIssue = require('./SetIssue')
const Helper = require('./Helper')

module.exports = strategy => {
  if (strategy === 'set') return new SetIssue()
  return new Helper()
}
