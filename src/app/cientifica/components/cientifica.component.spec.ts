import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificaComponent } from './cientifica.component';

describe('CientificaComponent', () => {
  let component: CientificaComponent;
  let fixture: ComponentFixture<CientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
