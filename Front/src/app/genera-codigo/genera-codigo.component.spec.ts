import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraCodigoComponent } from './genera-codigo.component';

describe('GeneraCodigoComponent', () => {
  let component: GeneraCodigoComponent;
  let fixture: ComponentFixture<GeneraCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneraCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneraCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
