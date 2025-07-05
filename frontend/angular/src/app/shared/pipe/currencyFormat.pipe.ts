// currency-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';
    
    // Remove tudo que não é número
    const numericValue = value.toString().replace(/\D/g, '');
    
    // Converte para float dividindo por 100
    const floatValue = parseFloat(numericValue) / 100;
    
    // Formata como moeda brasileira
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(floatValue);
  }
}