var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v

    case 'boolean':
      return v ? 'true' : 'false'

    case 'number':
      return isFinite(v) ? v : ''

    default:
      return ''
  }
}

function stringify (obj, sep, eq, name) {
  sep = sep || '&'
  eq = eq || '='
  if (obj === null) {
    obj = undefined
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = stringifyPrimitive(k) + eq
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + stringifyPrimitive(v)
        }).join(sep)
      } else {
        return ks + stringifyPrimitive(obj[k])
      }
    }).filter(Boolean).join(sep)

  }

  if (!name) return ''
  return stringifyPrimitive(name) + eq + stringifyPrimitive(obj)
}

function parseUrl (location) {
  if (typeof location === 'string') return location
  const { query } = location
  const queryStr = stringify(query)
  const path = location.path || location.url

  if (!queryStr) {
    return path
  }

  return `${path}?${queryStr}`
}

module.exports = {
  stringify,
  parseUrl
}
