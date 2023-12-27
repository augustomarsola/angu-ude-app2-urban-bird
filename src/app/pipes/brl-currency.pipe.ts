import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brlCurrency',
  standalone: true,
})
export class BrlCurrencyPipe implements PipeTransform {
  transform(value: number | undefined): unknown {
    if (!value) {
      return '';
    }
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }
}
