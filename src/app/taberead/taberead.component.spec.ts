import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabereadComponent } from './taberead.component';

describe('TabereadComponent', () => {
  let component: TabereadComponent;
  let fixture: ComponentFixture<TabereadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabereadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabereadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
