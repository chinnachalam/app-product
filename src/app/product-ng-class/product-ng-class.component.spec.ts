import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNgClassComponent } from './product-ng-class.component';

describe('ProductNgClassComponent', () => {
  let component: ProductNgClassComponent;
  let fixture: ComponentFixture<ProductNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
