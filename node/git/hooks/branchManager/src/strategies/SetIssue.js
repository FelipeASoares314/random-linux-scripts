const Issue = require('../model/Issue')

const { args } = require('../args')
const { write } = require('../../../../../helpers/files')
const { homeDir } = require('../../../../../helpers/osUser')
const { createRecursive, exists } = require('../../../../../helpers/directories')

class SetIssue {
  constructor () {
    this.configPath = args.config || this.defaultConfigPath
  }

  get defaultConfigPath () {
    return `${homeDir()}/.branch_manager`
  }

  get writePath () {
    return `${this.configPath}/issue.json`
  }

  async execute () {
    const issue = new Issue({ name: args.name })

    if (!await exists(this.configPath)) {
      console.log(`Criando caminho ${this.configPath}`)
      await createRecursive(this.configPath)
    }

    console.log('Escrevendo a issue', issue)
    await write(this.writePath, issue.toString())
  }
}

module.exports = SetIssue
