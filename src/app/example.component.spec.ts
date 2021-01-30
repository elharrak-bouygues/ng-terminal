import { TestBed, waitForAsync } from '@angular/core/testing';
import { ExampleComponent } from './example.component';
import { NgTerminalModule } from 'ng-terminal';


describe('ExampleComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleComponent
      ],
      imports: [
        NgTerminalModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
