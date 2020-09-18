import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamoCardComponent } from './camo-card.component';

describe('CamoCardComponent', () => {
  let component: CamoCardComponent;
  let fixture: ComponentFixture<CamoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
