import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZoomDirective } from '../../directive/zoom.directive';

@Component({
  selector: 'app-top-size-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-size-selector.component.html',
  styleUrl: './top-size-selector.component.scss',
})
export class TopSizeSelectorComponent {
  @Input() targetId = 'content';

  @ViewChild(ZoomDirective) zoomDirective!: ZoomDirective;

  width = 1920;
  height = 1080;

  widthUnit = 'px';
  heightUnit = 'px';

  units = ['px', '%', 'vh', 'vw'];

  applySize() {
    const target = document.getElementById(this.targetId);
    if (target) {
      target.style.width = `${this.width}${this.widthUnit}`;
      target.style.height = `${this.height}${this.heightUnit}`;
    }
  }
}
