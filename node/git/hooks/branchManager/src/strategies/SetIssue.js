const Issue = require('../model/Issue')

const { args } = require('../args')
const { write } = require('../../../../../helpers/files')
const { homePath, defaultFileName } = require('../configuration')
const { createRecursive, exists } = require('../../../../../helpers/directories')

class SetIssue {
  get writePath () {
    return `${homePath()}/${defaultFileName()}`
  }

  async execute () {
    const issue = new Issue({ name: args.n })

    if (!await exists(homePath())) {
      await createRecursive(homePath())
    }

    await write(this.writePath, issue.toString())
  }
}

module.exports = SetIssue
