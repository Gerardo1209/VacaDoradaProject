import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescmesasComponent } from './descmesas.component';

describe('DescmesasComponent', () => {
  let component: DescmesasComponent;
  let fixture: ComponentFixture<DescmesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescmesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescmesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
