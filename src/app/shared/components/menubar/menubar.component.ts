import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'custom-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        command: () => {
          this.router.navigate(['/dashboard']);
        },
      },
      {
        label: 'Productos',
        command: () => {
          this.router.navigate(['/products']);
        },
      },
    ];
  }
}
