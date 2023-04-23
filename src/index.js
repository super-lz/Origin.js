
const app = new App({
  child: new Ori({
    children: [
      new Row({
        children: [
          new Block(),
          new Block({
            style: {
              backgroundColor: 'green'
            }
          }),
          new Col({
            children: [
              new Block({
                style: {
                  backgroundColor: 'red'
                }
              }),
              new Block({
                style: {
                  backgroundColor: 'yellow'
                }
              }),
              new Row({
                children: [
                  new Block({
                    style: {
                      backgroundColor: 'blue'
                    }
                  }),
                  new Block({
                    style: {
                      backgroundColor: 'grey'
                    }
                  }),
                ]
              })
            ]
          })
        ]
      })
    ]
  })
}).mount('main')
