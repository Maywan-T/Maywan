import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeupdateComponent } from './tabeupdate.component';

describe('TabeupdateComponent', () => {
  let component: TabeupdateComponent;
  let fixture: ComponentFixture<TabeupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabeupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
