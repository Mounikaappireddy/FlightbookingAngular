import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagediscountComponent } from './managediscount.component';

describe('ManagediscountComponent', () => {
  let component: ManagediscountComponent;
  let fixture: ComponentFixture<ManagediscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagediscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagediscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
