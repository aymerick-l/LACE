import { Component } from '@angular/core';

export class Tool {
  name: string;
  description: string;
  icon: string;
  component?: Component;

  constructor(name: string, description: string, icon: string, component: Component) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.component = component;
  }
}
