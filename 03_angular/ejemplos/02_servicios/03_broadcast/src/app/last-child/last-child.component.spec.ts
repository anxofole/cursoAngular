import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastChildComponent } from './last-child.component';

describe('LastChildComponent', () => {
  let component: LastChildComponent;
  let fixture: ComponentFixture<LastChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
