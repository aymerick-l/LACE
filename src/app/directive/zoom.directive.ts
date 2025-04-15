import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
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
    private renderer: Renderer2
  ) {}

  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.scale = Math.max(this.minScale, this.scale - this.scaleStep);
    } else {
      this.scale = Math.min(this.maxScale, this.scale + this.scaleStep);
    }

    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.scale})`);

    this.renderer.setStyle(this.el.nativeElement, 'transform-origin', 'center');
  }
}
