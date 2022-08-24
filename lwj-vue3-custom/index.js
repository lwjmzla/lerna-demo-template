const fse = require('fs-extra')
function install(opts) {
  try {
    console.log(opts)
    const {templatePath,targetPath} = opts
    fse.ensureDirSync(templatePath) // !确保目录存在
    fse.ensureDirSync(targetPath)
    fse.copySync(templatePath,targetPath) // !整个目录复制
  } catch (error) {
    throw new Error(error.message) // !其实这里不用catch throw，直接程序抛出异常应该也没问题。
  }
}

module.exports = install