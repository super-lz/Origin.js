import Config from './config'

class App {
  constructor(options = {}) {
    if (!options.child) {
      console.error('need child')
    }
    this.child = options.child  
  }

  mount(id) {
    document.getElementById(id).appendChild(this.child.render());
  }

  version() {
    console.log(`version: ${Config.version1}`)
  }
}

export default App
