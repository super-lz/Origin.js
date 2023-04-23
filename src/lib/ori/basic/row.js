import Ori from '../ori'

class Row extends Ori {
  static defaultStyle = {
    display: 'flex',
  }
  constructor(options) {
    super(options)
    this.style = Ori.mergeStyle(Row.defaultStyle, this.style)
  }
}

export default Row
