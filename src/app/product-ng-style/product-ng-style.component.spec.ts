import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNgStyleComponent } from './product-ng-style.component';

describe('ProductNgStyleComponent', () => {
  let component: ProductNgStyleComponent;
  let fixture: ComponentFixture<ProductNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
