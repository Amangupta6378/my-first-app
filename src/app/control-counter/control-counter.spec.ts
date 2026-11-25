import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlCounter } from './control-counter';

describe('ControlCounter', () => {
  let component: ControlCounter;
  let fixture: ComponentFixture<ControlCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
