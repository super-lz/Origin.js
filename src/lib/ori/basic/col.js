import Ori from '../ori'

class Col extends Ori {
  static defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
  }
  constructor(options) {
    super(options)
    this.style = Ori.mergeStyle(Col.defaultStyle, this.style)
  }
}

export default Col
