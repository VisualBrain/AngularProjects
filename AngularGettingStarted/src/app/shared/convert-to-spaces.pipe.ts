import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
  pure: true
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, ...character: string[]): string {
    return value.replace(character[0], ' ');
  }

}
