import easingsFunctions from "./easingsFunctions";

export default {
  inserted(el, binding) {
    let value = binding.value.value || binding.value
    el.innerHTML = value
    if (typeof (value) !== "number")
      throw new Error(`Value must be a Number. Expected ${value} as a ${typeof (value)}`)
  },

  update(el, binding) {
    let animation = easingsFunctions[binding.arg] || easingsFunctions.linear
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
        let percent = animation(1 - curTime / time)
        let curVal = (1 - percent) * oldVal + percent * newVal
        el.innerHTML = curVal.toFixed(signs)
        curTime > 0 ? animate() : el.innerHTML = newVal
      }, 10)
    }

    animate()
  }
}