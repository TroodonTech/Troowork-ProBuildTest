import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedqrcodeViewComponent } from './combinedqrcode-view.component';

describe('CombinedqrcodeViewComponent', () => {
  let component: CombinedqrcodeViewComponent;
  let fixture: ComponentFixture<CombinedqrcodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedqrcodeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedqrcodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
