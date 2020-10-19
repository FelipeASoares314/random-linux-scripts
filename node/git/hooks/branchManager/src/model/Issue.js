const Base = require('./Base')

module.exports = class Issue extends Base {
  constructor ({ name } = {}) {
    super()
    this.name = name
    this.validate()
  }

  validate () {
    if (!this.name) throw new Error('Issue deve ser informado')
  }

  toString () {
    return JSON.stringify(this.name)
  }
}
