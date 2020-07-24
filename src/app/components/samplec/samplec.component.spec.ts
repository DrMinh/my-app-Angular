import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecComponent } from './samplec.component';

describe('SamplecComponent', () => {
  let component: SamplecComponent;
  let fixture: ComponentFixture<SamplecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
