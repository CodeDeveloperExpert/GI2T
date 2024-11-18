import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPreguntaDetailComponent } from './tipo-pregunta-detail.component';

describe('TipoPreguntaDetailComponent', () => {
  let component: TipoPreguntaDetailComponent;
  let fixture: ComponentFixture<TipoPreguntaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPreguntaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPreguntaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
