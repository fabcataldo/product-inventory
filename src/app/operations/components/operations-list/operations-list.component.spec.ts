import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsListComponent } from './operations-list.component';
import { products } from 'src/helpers/dummy-data';

describe('OperationsListComponent', () => {
  let component: OperationsListComponent;
  let fixture: ComponentFixture<OperationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsListComponent);
    component = fixture.componentInstance;
    component.productOperations = products[0].operations;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
