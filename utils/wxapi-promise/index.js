const promisable = require('./util/promise')
const { parseUrl } = require('./util/stringify')

function getStorageInfo () {
  return promisable(wx.getStorageInfo)
}

function removeStorage (key) {
  let obj = key
  if (typeof key === 'string') {
    obj = {
      key
    }
  }
  return promisable(wx.removeStorage, obj)
}

function setStorage (key, data) {
  let obj = key
  if (typeof key === 'string') {
    obj = {
      key,
      data
    }
  }
  return promisable(wx.setStorage, obj)
}

function getStorage (key) {
  let obj = key
  if (typeof key === 'string') {
    obj = {
      key
    }
  }
  return promisable(wx.getStorage, obj).then(res => res.data)
}

function reLaunch (location) {
  return promisable(wx.reLaunch, {
    url: parseUrl(location)
  })
}

function redirectTo (location) {
  return promisable(wx.redirectTo, {
    url: parseUrl(location)
  })
}

function navigateTo (location) {
  return promisable(wx.navigateTo, {
    url: parseUrl(location)
  })
}

function navigateBack (location) {
  return promisable(wx.navigateBack, {
    url: parseUrl(location)
  })
}

function navigateToMiniProgram (params) {
  return promisable(wx.navigateToMiniProgram, {
    ...params,
    path: parseUrl(params)
  })
}

module.exports = {
  getStorage,
  setStorage,
  removeStorage,
  getStorageInfo,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
  navigateToMiniProgram
}
