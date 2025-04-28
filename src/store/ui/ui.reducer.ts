import { createReducer, on } from '@ngrx/store';
import * as UIActions from './ui.actions';

export interface UIState {
  darkMode: boolean;
}

const initialState: UIState = {
  darkMode: false,
};

export const uiReducer = createReducer(
  initialState,
  on(UIActions.toggleDarkMode, (state) => ({
    ...state,
    darkMode: !state.darkMode,
  }))
);
