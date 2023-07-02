import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProductComponent } from './routing-product.component';

describe('RoutingProductComponent', () => {
  let component: RoutingProductComponent;
  let fixture: ComponentFixture<RoutingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
