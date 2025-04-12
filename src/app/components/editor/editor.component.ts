import { Component, inject, ViewContainerRef } from '@angular/core';
import { ToolSelectorComponent } from '../tool-selector/tool-selector.component';

@Component({
  selector: 'app-editor',
  imports: [ToolSelectorComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  vcr = inject(ViewContainerRef);
}
