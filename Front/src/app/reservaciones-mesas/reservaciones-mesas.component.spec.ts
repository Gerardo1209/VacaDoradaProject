import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesMesasComponent } from './reservaciones-mesas.component';

describe('ReservacionesMesasComponent', () => {
  let component: ReservacionesMesasComponent;
  let fixture: ComponentFixture<ReservacionesMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservacionesMesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservacionesMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
