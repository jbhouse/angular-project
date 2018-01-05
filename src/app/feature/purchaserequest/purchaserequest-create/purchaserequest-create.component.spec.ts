import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestCreateComponent } from './purchaserequest-create.component';

describe('PurchaserequestCreateComponent', () => {
  let component: PurchaserequestCreateComponent;
  let fixture: ComponentFixture<PurchaserequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
