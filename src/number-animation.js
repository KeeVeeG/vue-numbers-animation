import interpolate from 'interpolate-all'

export default {
  inserted(el, binding) {
    let value = binding.value.value || binding.value
    el.innerHTML = value
    if (typeof (value) !== "number")
      throw new Error(`Value must be a Number. Expected ${value} as a ${typeof (value)}`)
  },

  update(el, binding) {
    let time = binding.value.time || 1000
    let curTime = time
    let oldVal = binding.oldValue.value || binding.oldValue
    let newVal = binding.value.value || binding.value
    let signs = oldVal.toString().split(".").length - 1 ? oldVal.toString().split(".")[1].length : 0
    let curDate = new Date().getTime()

    const animate = () => {
      setTimeout(() => {
        let prevDate = curDate
        curDate = new Date().getTime()
        curTime -= curDate - prevDate
        let alpha = 1 - curTime / time
        
        if(alpha < 1){
          let curVal = interpolate(oldVal, newVal, alpha, binding.arg)
          el.innerHTML = curVal.toFixed(signs)
          animate()
        }else el.innerHTML = newVal
      }, 10)
    }

    animate()
  }
}