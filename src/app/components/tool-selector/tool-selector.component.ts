import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tool } from '../../model/tool';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AbstractEditorComponent } from '../editor-components/abstract-editor/abstract-editor.component';
import { TextComponent } from '../editor-components/text/text.component';

@Component({
  selector: 'app-tool-selector',
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './tool-selector.component.html',
  styleUrl: './tool-selector.component.scss',
})
export class ToolSelectorComponent {
  //output that indicate that selected tool change
  toolUpdate = output<Tool>();

  selectedTool?: Tool;

  tools: Tool[] = [
    new Tool('Selector', 'Select a component of the view', 'mouse', AbstractEditorComponent),
    new Tool('Text', 'Add a text on the view', 'text_fields', TextComponent),
  ];

  /**
   * Update the selected tool
   * @param tool
   */
  selectTool(tool: Tool) {
    console.debug('Selected tool:', tool.Name);
    this.selectedTool = tool;
    this.toolUpdate.emit(this.selectedTool);
  }
}
