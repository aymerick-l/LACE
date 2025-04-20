import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ZoomService } from '../services/zoom.service';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective {
  private scale = 1;
  private readonly scaleStep = 0.1;
  private readonly minScale = 0.2;
  private readonly maxScale = 5;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zoomService: ZoomService
  ) {}

  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);

    // calculate zoom factor
    let newScale = this.scale;
    if (delta > 0) {
      newScale = Math.max(this.minScale, this.scale - this.scaleStep);
    } else {
      newScale = Math.min(this.maxScale, this.scale + this.scaleStep);
    }

    // If no change in scale, do nothing
    if (newScale === this.scale) return;

    //coodinates of the mouse in the element
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    // New origin of the element
    const originX = offsetX / this.scale;
    const originY = offsetY / this.scale;

    //Style update
    this.scale = newScale;
    this.zoomService.scale = newScale;
    this.renderer.setStyle(this.el.nativeElement, 'transform-origin', `${originX}px ${originY}px`);
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.scale})`);
  }
}
