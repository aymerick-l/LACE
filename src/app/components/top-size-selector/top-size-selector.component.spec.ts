import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSizeSelectorComponent } from './top-size-selector.component';

describe('TopSizeSelectorComponent', () => {
  let component: TopSizeSelectorComponent;
  let fixture: ComponentFixture<TopSizeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSizeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
