import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPreguntaFormComponent } from './tipo-pregunta-form.component';

describe('TipoPreguntaFormComponent', () => {
  let component: TipoPreguntaFormComponent;
  let fixture: ComponentFixture<TipoPreguntaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPreguntaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPreguntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
