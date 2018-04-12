import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InconstructionComponent } from './inconstruction.component';

describe('InconstructionComponent', () => {
  let component: InconstructionComponent;
  let fixture: ComponentFixture<InconstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InconstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
