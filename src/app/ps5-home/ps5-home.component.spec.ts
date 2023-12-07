import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps5HomeComponent } from './ps5-home.component';

describe('Ps5HomeComponent', () => {
  let component: Ps5HomeComponent;
  let fixture: ComponentFixture<Ps5HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps5HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ps5HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
