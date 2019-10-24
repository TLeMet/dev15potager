import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';

@Pipe({ name: 'UTCDate'})
export class UTCDatePipe implements PipeTransform  {
    constructor() {}
    transform(value) {
        if (value)  {
            const moment = _moment;
            return  moment.utc(value).format('YYYY MMM DD, HH:mm');
        } else {
              return '';
        }
    }
}