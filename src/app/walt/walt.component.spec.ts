import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaltComponent } from './walt.component';

describe('WaltComponent', () => {
  let component: WaltComponent;
  let fixture: ComponentFixture<WaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
