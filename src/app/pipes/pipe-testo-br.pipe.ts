import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTestoBr'
})
export class PipeTestoBrPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const array: string[] = value.split('\n');
    let val: string = "";
    let sep: string = "";
    for (const s of array) {
      val += sep + (s.length < 60 ?
        "<b>" + s + "</b>" :
        "&nbsp;&nbsp;&nbsp;&nbsp;" + s);
      sep = "<br>";
    }
    return val;
  }

}
