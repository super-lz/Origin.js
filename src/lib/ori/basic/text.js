import Ori from '../ori'

class Text extends Ori {
  template = 'span'

  constructor(options = {}) {
    super({
      style: options.style,
    })
    this.child = options.child || ''
  }
  
  render() {
    const element = document.createElement(this.template)
    Object.keys(this.style).forEach(key => {
      element.style[key] = this.style[key]
    })
    element.innerText = this.child
    return element
  }
}

export default Text
