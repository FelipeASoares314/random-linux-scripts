const yargs = require('yargs/yargs')
const { hideBin } = yargs

const argv = yargs(hideBin(process.argv)).argv

module.exports = {
  args: argv,
  getMainFunction: _ => argv._[0]
}
