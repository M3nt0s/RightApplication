import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageClearComponent } from './storage-clear.component';

describe('StorageClearComponent', () => {
  let component: StorageClearComponent;
  let fixture: ComponentFixture<StorageClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
