import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechlogoComponent } from './techlogo.component';

describe('TechlogoComponent', () => {
  let component: TechlogoComponent;
  let fixture: ComponentFixture<TechlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
