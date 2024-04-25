import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormplatComponent } from './formplat.component';

describe('FormplatComponent', () => {
  let component: FormplatComponent;
  let fixture: ComponentFixture<FormplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormplatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
