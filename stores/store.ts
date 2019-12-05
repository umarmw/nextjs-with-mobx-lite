import {
    applySnapshot,
    Instance,
    SnapshotIn,
    SnapshotOut,
    types,
  } from 'mobx-state-tree'
  
  let store: IStore = null as any
  
  const Store = types
    .model({
      foo: types.number,
      lastUpdate: types.Date,
      light: false,
      product: types.string
    })
    .actions(self => {
      let timer
      const start = () => {
        timer = setInterval(() => {
          // mobx-state-tree doesn't allow anonymous callbacks changing data.
          // Pass off to another action instead (need to cast self as any
          // because typescript doesn't yet know about the actions we're
          // adding to self here)
          ;(self as any).update()
        }, 1000)
      }
      const update = () => {
        self.lastUpdate = new Date(Date.now())
        self.light = true
      }
      const stop = () => {
        clearInterval(timer)
      }
  
      const updateProduct = (products) => {
        let prod = JSON.stringify(products);
        self.product = prod;
      }

      return { start, stop, update, updateProduct }
    })
  
  export type IStore = Instance<typeof Store>
  export type IStoreSnapshotIn = SnapshotIn<typeof Store>
  export type IStoreSnapshotOut = SnapshotOut<typeof Store>
  
  export const initializeStore = (isServer, snapshot = null) => {
    if (isServer) {
      store = Store.create({ foo: 6, lastUpdate: Date.now(), light: false, product: "" })
    }
    if ((store as any) === null) {
      store = Store.create({ foo: 6, lastUpdate: Date.now(), light: false, product: "" })
    }
    if (snapshot) {
      applySnapshot(store, snapshot)
    }
    return store
  }
  