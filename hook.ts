import { storeContext, useStoreData } from "./context";
import { TStore } from "./store";

export const useRootData = <Selection>(
  dataSelector: (store: TStore) => Selection
) =>
  useStoreData(storeContext, contextData => contextData!, dataSelector);