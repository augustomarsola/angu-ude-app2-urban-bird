import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-order',
  standalone: true,
  imports: [],
  templateUrl: './success-order.component.html',
})
export class SuccessOrderComponent {
  @Input({ required: true }) public idOrder!: number;
}
