import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableButtonComponent } from './disable-button.component';

describe('DisableButtonComponent', () => {
  let component: DisableButtonComponent;
  let fixture: ComponentFixture<DisableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
