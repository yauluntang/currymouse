import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnydownloadComponent } from './bunnydownload.component';

describe('BunnydownloadComponent', () => {
  let component: BunnydownloadComponent;
  let fixture: ComponentFixture<BunnydownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunnydownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunnydownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
