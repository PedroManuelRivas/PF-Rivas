import { Pipe, PipeTransform } from '@angular/core';
// Concatena el nombre y el apellido en un solo input: Primera Preentrega
@Pipe({
  name: 'nameTransform'
})
export class NameTransformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value} ${args[0]}`;
  }

}
