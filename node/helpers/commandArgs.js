module.exports = {
  getArgs: _ => {
    const [,, ...args] = process.argv
    return args
  }
}