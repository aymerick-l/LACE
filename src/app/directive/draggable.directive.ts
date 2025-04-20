import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ZoomService } from '../services/zoom.service';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective implements OnInit {
  @Input() mode: 'canvas' | 'element' = 'element';
  @Output() positionChange = new EventEmitter<{ x: number; y: number }>();

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private startLeft = 0;
  private startTop = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zoomService: ZoomService
  ) {}

  ngOnInit() {
    const style = this.el.nativeElement.style;
    style.position = style.position || 'relative';
    if (!style.left) style.left = '0px';
    if (!style.top) style.top = '0px';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const nativeEl = this.el.nativeElement as HTMLElement;

    if (this.mode === 'canvas') {
      if ((event.target as HTMLElement).closest('[appDraggable][mode="element"]')) return;
    }

    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startLeft = parseInt(nativeEl.style.left || '0', 10);
    this.startTop = parseInt(nativeEl.style.top || '0', 10);

    this.renderer.addClass(document.body, 'unselectable');

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    if (!this.isDragging) return;
    let dx = 0;
    let dy = 0;

    //do not applies zoom scale when we move a canvas
    if (this.mode === 'canvas') {
      dx = event.clientX - this.startX;
      dy = event.clientY - this.startY;
    } else {
      dx = (event.clientX - this.startX) / this.zoomService.scale;
      dy = (event.clientY - this.startY) / this.zoomService.scale;
    }

    const newLeft = this.startLeft + dx;
    const newTop = this.startTop + dy;

    this.el.nativeElement.style.left = `${newLeft}px`;
    this.el.nativeElement.style.top = `${newTop}px`;

    this.positionChange.emit({ x: newLeft, y: newTop });
  };

  onMouseUp = () => {
    this.isDragging = false;
    this.renderer.removeClass(document.body, 'unselectable');

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}
