import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, TStore } from './store';
import { useObserver } from 'mobx-react-lite';

export const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};


export const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
  ) => {
    const value = React.useContext(context);
    if (!value) {
      throw new Error();
    }
    const store = storeSelector(value);
    return useObserver(() => {
      return dataSelector(store);
    });
  };

export default StoreProvider;