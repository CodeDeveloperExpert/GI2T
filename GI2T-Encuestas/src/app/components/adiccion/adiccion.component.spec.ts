import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiccionComponent } from './adiccion.component';

describe('AdiccionComponent', () => {
  let component: AdiccionComponent;
  let fixture: ComponentFixture<AdiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
