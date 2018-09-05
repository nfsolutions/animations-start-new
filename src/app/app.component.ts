import { Component } from '@angular/core';
import {state, trigger, style} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color' : 'red',
        'translate': 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        'translate': 'translateX(100px)'
      }))
    ])

  ]
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
}
