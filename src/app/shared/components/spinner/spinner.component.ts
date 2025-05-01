import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    <div class="backdrop">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {}