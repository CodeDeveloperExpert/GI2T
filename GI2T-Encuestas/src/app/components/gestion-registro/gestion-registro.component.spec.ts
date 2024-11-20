import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegistroComponent } from './gestion-registro.component';

describe('GestionRegistroComponent', () => {
  let component: GestionRegistroComponent;
  let fixture: ComponentFixture<GestionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
