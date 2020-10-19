const fs = require('fs')

module.exports = {
  write: (filePath, data) => new Promise((resolve, reject) => 
    fs.writeFile(filePath, data, err =>
      err ? reject(err) : resolve()  
    )
  )
}