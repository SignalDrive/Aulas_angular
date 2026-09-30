import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstoqueFrutas } from './estoque-frutas';

describe('EstoqueFrutas', () => {
  let component: EstoqueFrutas;
  let fixture: ComponentFixture<EstoqueFrutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueFrutas],
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueFrutas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
