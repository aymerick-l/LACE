import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ToolSelectorComponent } from '../tool-selector/tool-selector.component';
import { Tool } from '../../model/tool';
import { AbstractEditorComponent } from '../editor-components/abstract-editor/abstract-editor.component';
import { SideSelectorComponent } from '../side-selector/side-selector.component';
import { ZoomDirective } from '../../directive/zoom.directive';
import { TopSizeSelectorComponent } from '../top-size-selector/top-size-selector.component';
import { DraggableDirective } from '../../directive/draggable.directive';

@Component({
  selector: 'app-editor',
  imports: [
    ToolSelectorComponent,
    SideSelectorComponent,
    ZoomDirective,
    TopSizeSelectorComponent,
    DraggableDirective,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;

  //list of component added to the editor
  listComponents: ComponentRef<AbstractEditorComponent>[] = [];

  //Create the default tool as the selector
  defaultTool: Tool = new Tool(
    'Selector',
    'Select a component of the view',
    'mouse',
    AbstractEditorComponent
  );
  currentTool: Tool = this.defaultTool;

  /**
   * Manage component creation on click depending the tool selected in the editor toolbar
   * @param event MouseEvent react on the click on the canvas
   * @description Create a component on the canvas at the position of the click
   */
  manageClickOnCanvas(event: MouseEvent) {
    //We do nothing in particular with the default tool
    if (this.currentTool.name === this.defaultTool.name) {
      console.log('Default tool selected, do nothing');
      return;
    }
    //create the component with the actual tool
    console.log('Creating component with tool:', this.currentTool.getComponent());
    const createdComponent = this.vcr.createComponent(this.currentTool.getComponent());
    createdComponent.setInput('text', 'clicked!');
    // Positionning the component where the click happen
    const elementRef = createdComponent.location.nativeElement as HTMLElement;
    elementRef.style.position = 'absolute';
    elementRef.style.left = `${event.clientX - 5}px`;
    elementRef.style.top = `${event.clientY - 30}px`;
    elementRef.setAttribute('appDraggable', '');
    this.listComponents.push(createdComponent);

    //reset the current tool to default tool after the click
    this.currentTool = this.defaultTool;
  }

  /**
   * Update the current tool for the dic to edit
   * @param updatedTool
   */
  updateTool(updatedTool: Tool) {
    console.debug('Tool updated:', updatedTool.Name);
    this.currentTool = updatedTool;
  }
}
