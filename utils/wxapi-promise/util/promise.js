/**
 * 微信api方法以Promise返回
 * @param {function} fn
 * @param  {...any} args
 */
function promisable (fn, ...args) {
  const extend = function (callback) {
    return function (res) {
      res.errMsg && (res.message = res.errMsg)
      callback(res)
    }
  }
  return new Promise((resolve, reject) => {
    const obj = Object.assign({}, ...args, {
      success: extend(resolve),
      fail: extend(reject)
    })
    fn(obj)
  })
}

module.exports = promisable
