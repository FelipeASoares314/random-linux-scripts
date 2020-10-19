const { args } = require('../args')
const { homeDir } = require('../../../../../helpers/osUser')

module.exports = {
  homePath: _ => args.config || `${homeDir()}/.branch_manager`,
  defaultFileName: _ => 'current_issue.txt'
}
