import { createContext } from "react";
import { Context, AppState } from "./state.modal";

export const GlobalState = createContext<Context>({
  appState: {} as AppState,
  setAppState: (appState: any) => null,
});
export type { Context, AppState };
