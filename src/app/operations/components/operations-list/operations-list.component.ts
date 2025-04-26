import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../interfaces/operation.interface';

@Component({
  selector: 'operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css'],
})
export class OperationsListComponent implements OnInit {
  @Input() productOperations: Operation[] | undefined = [];
  constructor() {}

  ngOnInit(): void {}
}
