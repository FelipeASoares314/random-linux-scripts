#!/usr/bin/env node
const strategyFac = require('./src/strategies/fac')

const { getMainFunction } = require('./src/args')

function main () {
  const mainFunction = getMainFunction()
  const strategy = strategyFac(mainFunction)

  strategy.execute()
    .then(_ => console.log('Finalizado com sucesso!'))
    .then(_ => process.exit(0))
    .catch(error => {
      console.log(error)
      process.exit(1)
    })
}

main()
