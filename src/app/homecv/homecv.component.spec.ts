import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecvComponent } from './homecv.component';

describe('HomecvComponent', () => {
  let component: HomecvComponent;
  let fixture: ComponentFixture<HomecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
