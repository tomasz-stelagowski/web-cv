import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpRecordComponent } from './exp-record.component';

describe('ExpRecordComponent', () => {
  let component: ExpRecordComponent;
  let fixture: ComponentFixture<ExpRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
