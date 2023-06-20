import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNgSwitchComponent } from './product-ng-switch.component';

describe('ProductNgSwitchComponent', () => {
  let component: ProductNgSwitchComponent;
  let fixture: ComponentFixture<ProductNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
