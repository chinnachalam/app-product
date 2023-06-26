import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProductEditComponent } from './routing-product-edit.component';

describe('RoutingProductEditComponent', () => {
  let component: RoutingProductEditComponent;
  let fixture: ComponentFixture<RoutingProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingProductEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
