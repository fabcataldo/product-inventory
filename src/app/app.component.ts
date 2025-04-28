import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/store/dashboard/dashboard.reducer';
import { ProductsState } from 'src/store/products/products.reducer';
import { toggleDarkMode } from 'src/store/ui/ui.actions';
import { UIState } from 'src/store/ui/ui.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkModeSetted = false;
  constructor(private router: Router, private store: Store<UIState>) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard']);
  }

  changeToDarkMode(event: any) {
    console.log(event);
    this.store.dispatch(toggleDarkMode());
  }
}
