import {
  Component,
  computed,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AbstractEditorComponent } from '../abstract-editor/abstract-editor.component';

@Component({
  selector: 'app-text',
  imports: [CdkDrag, FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent extends AbstractEditorComponent implements OnInit {
  userInfoElement = viewChild<ElementRef<HTMLElement>>('update');

  @Input() text = 'Hello World!';

  currentText = signal(this.text);

  ngOnInit(): void {
    this.label = computed(() => 'Text - ' + this.currentText());
  }

  @HostListener('dblclick') async onDoubleClicked() {
    this.setEditMode(true);
  }

  override setEditMode(value: boolean) {
    super.setEditMode(value);
    // Focus the element after a short delay to ensure it is rendered
    setTimeout(() => {
      const element = this.userInfoElement();
      if (element !== undefined) {
        element.nativeElement.focus();
      }
    }, 10);
  }

  @HostListener('focusout') onFocusOut() {
    this.setEditMode(false);
  }
}
