#!/usr/bin/env node
const { exists } = require('../../../helpers/directories')
const { readStream, writeStream, chmod } = require('../../../helpers/files')

const gitOutputPath = '.git/hooks/commit-msg'

async function main () {
  if (!await exists('.git')) {
    console.error('Esse script deve ser executado na raiz do repositório!')
    process.exit(1)
  }

  const rStream = await readStream(`${__dirname}/commit-msg.sh`)
  await writeStream(`${gitOutputPath}`, rStream)
  await chmod(gitOutputPath, '755')
  process.exit(0)
}

main()
