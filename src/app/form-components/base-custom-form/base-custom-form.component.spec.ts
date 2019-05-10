import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCustomFormComponent } from './base-custom-form.component';

describe('BaseCustomFormComponent', () => {
  let component: BaseCustomFormComponent;
  let fixture: ComponentFixture<BaseCustomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCustomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
