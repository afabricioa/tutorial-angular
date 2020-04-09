import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNotfoundComponent } from './aluno-notfound.component';

describe('AlunoNotfoundComponent', () => {
  let component: AlunoNotfoundComponent;
  let fixture: ComponentFixture<AlunoNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
