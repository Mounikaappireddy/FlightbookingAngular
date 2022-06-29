import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktheairlineComponent } from './blocktheairline.component';

describe('BlocktheairlineComponent', () => {
  let component: BlocktheairlineComponent;
  let fixture: ComponentFixture<BlocktheairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocktheairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocktheairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
