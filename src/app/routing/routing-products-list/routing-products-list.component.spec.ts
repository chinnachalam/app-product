import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingProductsListComponent } from './routing-products-list.component';

describe('RoutingProductsListComponent', () => {
  let component: RoutingProductsListComponent;
  let fixture: ComponentFixture<RoutingProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
