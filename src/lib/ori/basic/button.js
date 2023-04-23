import Ori from '../ori'

class Button extends Ori {
  constructor(options) {
    super(options)
    this.onClick = options.onClick || (() => { })
  }

  template = 'button'

  render() {
    const dom = super.render()
    dom.onclick = (() => {
      this.onClick(this)
    })
    return dom
  }
}

export default Button
