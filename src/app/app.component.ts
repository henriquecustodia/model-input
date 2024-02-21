import { Component, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  template: `
    <label for="random-name">
      <input type="checkbox" name="random-name" id="random-name" #element (change)="value.set(element.checked)">
      My checkbox
    </label>
  `,
})
export class CheckboxComponent {
  value =  model.required({ alias: 'checked' })
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <app-checkbox [(checked)]="checked" />
    
    <hr>

    <div>
      Checkbox's value is {{ checked() }}
    </div>
  `,
  styles: [],
})
export class AppComponent {
  checked = signal(false); 
}
