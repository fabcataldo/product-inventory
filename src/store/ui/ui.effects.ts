import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as UIActions from './ui.actions';

@Injectable()
export class UIEffects {
  constructor(private actions$: Actions) {}

  toggleDarkMode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UIActions.toggleDarkMode),
      tap((darkMode) =>
        document.documentElement.setAttribute(
          'data-theme',
          darkMode ? 'dark' : 'red'
        )
      )
    )
  );
}
