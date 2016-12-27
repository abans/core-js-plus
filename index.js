if (typeof module === undefined) module = {}
module.exports = mod

function mod () {
  Object.prototype.get = mod.get
}

// object get
mod.get = function (str, df, isSet) {
  var prr
  if (typeof str === 'number') return this[str]
  if (typeof str !== 'string') return this
  if (str.length === 0) return this
  prr = str.split('.')
  if (prr.length === 0) return this[str]
  // if (!Array.isArray(prr)) return false
  var len = prr.length
  var i = -1
  var rs
  while (++i < len) {
    if (i === 0) rs = this
    if (!prr[i]) continue
    if (rs === undefined) {
      break
    }
    rs = rs[prr[i]]
  }
  if (rs === undefined && df) return df
  return rs
}
