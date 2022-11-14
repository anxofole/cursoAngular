import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleChildComponent } from './middle-child.component';

describe('MiddleChildComponent', () => {
  let component: MiddleChildComponent;
  let fixture: ComponentFixture<MiddleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
