const fs = require('fs')
const { pathToFileURL } = require('url')

module.exports = {
  readStream: filePath => new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath)
    stream.on('open', _ => resolve(stream))
    stream.on('error', reject)
  }),
  read: filePath => new Promise((resolve, reject) => 
    fs.readFile(filePath, (err, data) =>
      err ? reject(err) : resolve(data)  
    )
  ),
  write: (filePath, data) => new Promise((resolve, reject) => 
    fs.writeFile(filePath, data, err =>
      err ? reject(err) : resolve()  
    )
  ),
  writeStream: (filePath, readStream) => new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath, { flags: 'w' })
    readStream.pipe(writeStream)
    writeStream.on('close', resolve)
    writeStream.on('error', reject)
  }),
  remove: filePath => new Promise((resolve, reject) => 
    fs.unlink(filePath, err =>
      err ? reject(err) : resolve()  
    )
  ),
  chmod: (path, permission) => new Promise((resolve, reject) => 
    fs.chmod(path, permission, err =>
      err ? reject(err) : resolve()  
    )
  )
}