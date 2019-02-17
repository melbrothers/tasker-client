import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'convertDateTimeToFromNow'
})
export class ConvertDateTimeToFromNowPipe implements PipeTransform {

  transform(dateTime: any, args?: any): any {
    if (moment(dateTime).isValid()) {
      return moment(dateTime).fromNow();
    }
  }

}
