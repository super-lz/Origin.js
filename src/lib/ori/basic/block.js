import Ori from '../ori'

class Block extends Ori {
  static defaultStyle = {
    backgroundColor: 'black',
    width: '100px',
    height: '100px',
  }
  constructor(options) {
    super(options)
    this.style = Ori.mergeStyle(Block.defaultStyle, this.style)
  }
}

export default Block
