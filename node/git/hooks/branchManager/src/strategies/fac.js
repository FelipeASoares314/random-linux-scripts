const SetIssue = require('./SetIssue')
const Helper = require('./Helper')
const RemoveIssue = require('./RemoveIssue')

module.exports = strategy => {
  if (strategy === 'set') return new SetIssue()
  if (strategy === 'rm') return new RemoveIssue()
  return new Helper()
}
