import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZComponent } from './z.component';

describe('ZComponent', () => {
  let component: ZComponent;
  let fixture: ComponentFixture<ZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
