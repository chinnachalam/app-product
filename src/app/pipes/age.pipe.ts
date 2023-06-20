import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any {
    const currYear = new Date().getFullYear()
    const manyear = value.getFullYear()
    const age = currYear - manyear;

    return age;
  }

}
