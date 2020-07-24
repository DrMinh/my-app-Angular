import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputandOutputComponent } from './inputand-output.component';

describe('InputandOutputComponent', () => {
  let component: InputandOutputComponent;
  let fixture: ComponentFixture<InputandOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputandOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputandOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
