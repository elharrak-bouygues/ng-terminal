import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalStyleComponent } from './global-style.component';

describe('GlobalStyleComponent', () => {
  let component: GlobalStyleComponent;
  let fixture: ComponentFixture<GlobalStyleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
