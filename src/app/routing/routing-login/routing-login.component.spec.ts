import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLoginComponent } from './routing-login.component';

describe('RoutingLoginComponent', () => {
  let component: RoutingLoginComponent;
  let fixture: ComponentFixture<RoutingLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
