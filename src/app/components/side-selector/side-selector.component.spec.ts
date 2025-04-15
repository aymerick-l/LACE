import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSelectorComponent } from './side-selector.component';

describe('SideSelectorComponent', () => {
  let component: SideSelectorComponent;
  let fixture: ComponentFixture<SideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
