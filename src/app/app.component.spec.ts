import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  @Component({
    selector: 'custom-menubar',
  })
  class CustomMenubarComponentMock {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [Title],
    })
      .overrideComponent(AppComponent, {
        add: {
          imports: [CustomMenubarComponentMock],
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
