import { Type } from '@angular/core';
import { AbstractEditorComponent } from '../components/editor-components/abstract-editor/abstract-editor.component';

export class Tool {
  name: string;
  description: string;
  icon: string;
  component: Type<AbstractEditorComponent>;

  constructor(name: string, description: string, icon: string, component: Type<AbstractEditorComponent>) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.component = component;
  }

  get Name(): string {
    return this.name;
  }
  get Description(): string {
    return this.description;
  }
  get Icon(): string {
    return this.icon;
  }
  getComponent(): Type<AbstractEditorComponent> {
    return this.component;
  }
}
