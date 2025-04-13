import { Component, ComponentRef, Input, signal } from '@angular/core';
import { AbstractEditorComponent } from '../editor-components/abstract-editor/abstract-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TruncatePipe } from '../../pipe/truncate.pipe';

@Component({
  selector: 'app-side-selector',
  imports: [MatIconModule, MatButtonModule, MatDividerModule, TruncatePipe],
  templateUrl: './side-selector.component.html',
  styleUrl: './side-selector.component.scss',
})
export class SideSelectorComponent {
  @Input() componentList: ComponentRef<AbstractEditorComponent>[] = [];

  isMinimized = signal(false);

  /**
   * Update display state when we click on the togle menu
   */
  updateDisplayState() {
    this.isMinimized.set(!this.isMinimized());
  }

  /**
   * Destroy the related component and remove it from the displayed component list
   * @param component the component to remove
   */
  removeCurrentComponent(component: ComponentRef<AbstractEditorComponent>, index: number) {
    this.componentList.splice(index, 1);
    component.destroy();
  }

  selectComponent(component: ComponentRef<AbstractEditorComponent>) {
    component.instance.setEditMode(true);
  }
}
