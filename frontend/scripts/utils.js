// 用于设置输出字体样式
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
// 相对路径拼接
const resolve = (...file) => path.resolve(__dirname, ...file)
// 标准输出样式设置
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))

// 生成文件
function generateFile (path, data) {
    if (fs.existsSync(path)) {
        errorLog(`${path}文件已存在`)
        return
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}

// 递归创建目录
function mk_dirs (directory, callback) {
    const exists = fs.existsSync(directory)
    if (exists) {
        callback()
    } else {
        mk_dirs(path.dirname(directory), function () {
            fs.mkdirSync(directory)
            callback()
        })
    }
}

function dotExistDirectoryCreate (directory) {
    return new Promise((resolve) => {
        mk_dirs(directory, function () {
            resolve(true)
        })
    })
}

module.exports = {
    path: path,
    fs: fs,
    resolve: resolve,
    log: log,
    successLog: successLog,
    errorLog: errorLog,
    generateFile: generateFile,
    dotExistDirectoryCreate: dotExistDirectoryCreate
}
