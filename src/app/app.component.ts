import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkModeSetted = false;
  constructor(private router: Router, public titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Panel de Control de Inventario');
    this.router.navigate(['/dashboard']);
  }

  changeToDarkMode(event: any) {
    document.body.classList.toggle('dark-theme');
  }
}
