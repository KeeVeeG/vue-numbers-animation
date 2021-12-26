import interpolate from 'interpolate-all'

export default {
  inserted(el, binding) {
    const value = +(binding.value.value || binding.value)
    el.innerHTML = value
    if (typeof (value) !== "number")
      throw new Error(`Value must be a Number. Expected ${value} as a ${typeof (value)}`)
  },

  update(el, binding) {
    const time = binding.value.time || 1000
    let curTime = time
    const oldVal = +(binding.oldValue.value || binding.oldValue)
    const newVal = +(binding.value.value || binding.value)
    const signs = oldVal.toString().split(".").length - 1 ? oldVal.toString().split(".")[1].length : 0
    let curDate = new Date().getTime()

    const animate = (lastVal) => {
      setTimeout(() => {
        if (lastVal !== undefined && el.innerHTML != lastVal)
          return
        const prevDate = curDate
        curDate = new Date().getTime()
        curTime -= curDate - prevDate
        const alpha = 1 - curTime / time

        if (alpha < 1) {
          const curVal = interpolate(oldVal, newVal, alpha, binding.arg)
          el.innerHTML = curVal.toFixed(signs)
          animate(curVal.toFixed(signs))
        } else
          el.innerHTML = newVal
      })
    }

    animate()
  }
}