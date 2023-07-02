import { TestBed } from '@angular/core/testing';

import { AppProductInterceptorService } from './app-product-interceptor.service';

describe('AppProductInterceptorService', () => {
  let service: AppProductInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppProductInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
