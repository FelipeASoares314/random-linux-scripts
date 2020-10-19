#!/usr/bin/env node
const strategyFac = require('./src/strategies/fac')

const { getMainFunction } = require('./src/args')

function main () {
  const mainFunction = getMainFunction()
  const strategy = strategyFac(mainFunction)

  strategy.execute()
}

main()
