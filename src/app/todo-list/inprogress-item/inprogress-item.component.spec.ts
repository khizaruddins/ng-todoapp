import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressItemComponent } from './inprogress-item.component';

describe('InprogressItemComponent', () => {
  let component: InprogressItemComponent;
  let fixture: ComponentFixture<InprogressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
