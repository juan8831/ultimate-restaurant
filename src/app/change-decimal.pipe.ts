import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDecimal'
})
export class ChangeDecimalPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(',', '.').substring(0,value.length-3);
  }

}
