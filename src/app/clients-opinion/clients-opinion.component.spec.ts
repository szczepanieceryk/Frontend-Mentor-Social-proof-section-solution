import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsOpinionComponent } from './clients-opinion.component';

describe('ClientsOpinionComponent', () => {
  let component: ClientsOpinionComponent;
  let fixture: ComponentFixture<ClientsOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
