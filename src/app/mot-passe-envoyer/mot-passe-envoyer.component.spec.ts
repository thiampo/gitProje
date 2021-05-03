import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPasseEnvoyerComponent } from './mot-passe-envoyer.component';

describe('MotPasseEnvoyerComponent', () => {
  let component: MotPasseEnvoyerComponent;
  let fixture: ComponentFixture<MotPasseEnvoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotPasseEnvoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPasseEnvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
