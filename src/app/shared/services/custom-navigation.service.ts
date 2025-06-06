import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomNavigationService {
  constructor(private router: Router) {}

  navigateToRoot() {
    this.router.navigate([`/`]);
  }
}
