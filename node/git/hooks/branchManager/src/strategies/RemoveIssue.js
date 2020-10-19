const { remove } = require('../../../../../helpers/files')
const { exists } = require('../../../../../helpers/directories')
const { homePath, defaultFileName } = require('../configuration')

class RemoveIssue {
  get filePath () {
    return `${homePath()}/${defaultFileName()}`
  }

  async execute () {
    if (!await exists(homePath())) return
    return remove(this.filePath)
  }
}

module.exports = RemoveIssue
