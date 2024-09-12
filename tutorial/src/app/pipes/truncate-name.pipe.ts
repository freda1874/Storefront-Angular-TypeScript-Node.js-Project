import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true,
})
export class TruncateNamePipe implements PipeTransform {
  transform(value: string, maxLength: 16, elipsis: string = '...'): unknown {
    if (value.length > maxLength) {
      return value.slice(0, maxLength) + elipsis;
    }
    return value;
  }
}
