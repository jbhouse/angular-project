import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestlineitemCreateComponent } from './purchaserequestlineitem-create.component';

describe('PurchaserequestlineitemCreateComponent', () => {
  let component: PurchaserequestlineitemCreateComponent;
  let fixture: ComponentFixture<PurchaserequestlineitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestlineitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestlineitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
