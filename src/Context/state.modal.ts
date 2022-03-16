export interface AppState {
  Auto: { userId: string; jst: string } | null;
}

export interface Context {
  appState: AppState;
  setAppState: (state: Partial<AppState>) => any;
}
