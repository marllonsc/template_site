import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtntalkComponent } from './btntalk.component';

describe('BtntalkComponent', () => {
  let component: BtntalkComponent;
  let fixture: ComponentFixture<BtntalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtntalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtntalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
