class Ori {
  template = 'div'

  constructor(options = {}) {
    this.children = options.children || []
    this.style = options.style || {}
  }

  render() {
    const element = document.createElement(this.template)
    Object.keys(this.style).forEach(key => {
      element.style[key] = this.style[key]
    })
    this.children.forEach(item => {
      element.appendChild(item.render())
    })
    return element
  }

  static mergeStyle(to, from) {
    if (!to || !from) {
      return {}
    }
    let temp = {}
    Object.assign(temp, to, from)
    return temp
  }
}

export default Ori
