import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageairlineComponent } from './manageairline.component';

describe('ManageairlineComponent', () => {
  let component: ManageairlineComponent;
  let fixture: ComponentFixture<ManageairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
