import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-abstract-editor',
  imports: [],
  templateUrl: './abstract-editor.component.html',
  styleUrl: './abstract-editor.component.scss',
})
export class AbstractEditorComponent {
  //name of the component
  name = 'AbstractName';
  //label to display on the selector list
  label = computed(() => 'AbstractLabel');

  isEditMode = signal(false);

  /**
   * Method to be called when a component should change edit mode.
   * Can be ovverriden in the child component to set the edit mode
   * @param value boolean value to set the edit mode
   */
  setEditMode(value: boolean) {
    this.isEditMode.set(value);
  }
}
