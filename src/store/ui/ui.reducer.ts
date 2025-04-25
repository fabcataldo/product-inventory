import { createReducer, on } from '@ngrx/store';
import * as UIActions from './ui.actions';

export interface UIState {
  darkMode: boolean;
  sidebarOpen: boolean;
}

const initialState: UIState = {
  darkMode: false,
  sidebarOpen: true,
};

export const uiReducer = createReducer(
  initialState,
  on(UIActions.toggleDarkMode, (state) => ({
    ...state,
    darkMode: !state.darkMode,
  })),
  on(UIActions.toggleSidebar, (state) => ({
    ...state,
    sidebarOpen: !state.sidebarOpen,
  }))
);
