import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithForm0buikderExampleComponent } from './reactive-form-with-form0buikder-example.component';

describe('ReactiveFormWithForm0buikderExampleComponent', () => {
  let component: ReactiveFormWithForm0buikderExampleComponent;
  let fixture: ComponentFixture<ReactiveFormWithForm0buikderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormWithForm0buikderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithForm0buikderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
