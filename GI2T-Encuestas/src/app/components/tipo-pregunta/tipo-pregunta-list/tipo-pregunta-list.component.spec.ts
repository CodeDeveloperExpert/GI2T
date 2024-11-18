import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPreguntaListComponent } from './tipo-pregunta-list.component';

describe('TipoPreguntaListComponent', () => {
  let component: TipoPreguntaListComponent;
  let fixture: ComponentFixture<TipoPreguntaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoPreguntaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPreguntaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
