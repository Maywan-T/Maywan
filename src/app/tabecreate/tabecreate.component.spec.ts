import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabecreateComponent } from './tabecreate.component';

describe('TabecreateComponent', () => {
  let component: TabecreateComponent;
  let fixture: ComponentFixture<TabecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
