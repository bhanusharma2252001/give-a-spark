import {DomSanitizer} from '@angular/platform-browser';
import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'safepipe'
})
export class SafepipePipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value:any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
