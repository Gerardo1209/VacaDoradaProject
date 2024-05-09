import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaCodigoComponent } from './ingresa-codigo.component';

describe('IngresaCodigoComponent', () => {
  let component: IngresaCodigoComponent;
  let fixture: ComponentFixture<IngresaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresaCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
