import Ori from '../ori'

class Block extends Ori {
  static defaultStyle = {
    display: 'flex',
  }
  constructor(options) {
    super(options)
    this.style = Ori.mergeStyle(Block.defaultStyle, this.style)
  }
}

export default Block
