import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tool } from '../../model/tool';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tool-selector',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './tool-selector.component.html',
  styleUrl: './tool-selector.component.scss',
})
export class ToolSelectorComponent {
  tools: Tool[] = [
    {
      name: 'Selector',
      description: 'Select a component of the view',
      icon: 'mouse',
    },
    {
      name: 'Text',
      description: 'Add a text on the view',
      icon: 'text_fields',
    },
  ];

  selectTool(tool: Tool) {
    console.log('Selected tool:', tool);
    // Logic to handle tool selection goes here
  }
}
