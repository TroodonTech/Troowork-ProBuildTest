import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineQrCodePageComponent } from './combine-qr-code-page.component';

describe('CombineQrCodePageComponent', () => {
  let component: CombineQrCodePageComponent;
  let fixture: ComponentFixture<CombineQrCodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineQrCodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineQrCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
