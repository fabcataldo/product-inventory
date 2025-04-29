import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { loadDashboard } from 'src/store/dashboard/dashboard.actions';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

  beforeEach(async () => {
    storeSpy.select.and.returnValue(
      of({ totalProducts: 3, lowStockProducts: [{}], totalInventoryValue: 200 })
    );

    await TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain and render dashboard data', fakeAsync(() => {
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadDashboard());
    tick();
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.surface-card'));
    expect(cards[0].nativeElement.textContent).toContain('3');
    expect(cards[2].nativeElement.textContent).toContain('200');
  }));
});
