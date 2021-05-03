import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPasseOblierComponent } from './mot-passe-oblier.component';

describe('MotPasseOblierComponent', () => {
  let component: MotPasseOblierComponent;
  let fixture: ComponentFixture<MotPasseOblierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotPasseOblierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPasseOblierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
