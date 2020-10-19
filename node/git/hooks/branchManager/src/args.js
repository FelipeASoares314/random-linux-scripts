const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

module.exports = {
  getArgs: _ => argv,

  getMainFunction: _ => argv._[0]
}
