import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSearchComponent } from './cliente-search.component';

describe('ClienteSearchComponent', () => {
  let component: ClienteSearchComponent;
  let fixture: ComponentFixture<ClienteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
