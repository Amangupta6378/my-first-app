import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ananya } from './ananya';

describe('Ananya', () => {
  let component: Ananya;
  let fixture: ComponentFixture<Ananya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ananya],
    }).compileComponents();

    fixture = TestBed.createComponent(Ananya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
