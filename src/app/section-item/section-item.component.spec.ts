import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionItemComponent } from './section-item.component';

describe('SectionItemComponent', () => {
  let component: SectionItemComponent;
  let fixture: ComponentFixture<SectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});