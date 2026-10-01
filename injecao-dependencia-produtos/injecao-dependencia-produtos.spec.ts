import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoDependenciaProdutos } from './injecao-dependencia-produtos';

describe('InjecaoDependenciaProdutos', () => {
  let component: InjecaoDependenciaProdutos;
  let fixture: ComponentFixture<InjecaoDependenciaProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjecaoDependenciaProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(InjecaoDependenciaProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
