const fs = require('fs')

module.exports = {
  exists: dir => new Promise(resolve => 
    fs.access(dir, err => resolve(!err))  
  ),

  createRecursive: path => new Promise((resolve, reject) =>
    fs.mkdir(path, { recursive: true }, err => err ? reject(err) : resolve())
  )
}