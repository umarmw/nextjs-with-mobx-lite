import { observable } from "mobx";

export const createStore = () => {
  const store = {
      products: observable.box([], { name: "produxt" }),
      setProducts(updatedProducts:any){
          store.products.set(updatedProducts)
      },
      get updatedProducts(){
          return JSON.parse(JSON.stringify(store.products.get()))
      }
  };
  return store;
};
  
export type TStore = ReturnType<typeof createStore>