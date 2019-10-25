import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conv'})
export class ConvertImage implements PipeTransform  {
    constructor() {}
    transform(value) {
        let imf;
        if (value)  {
            imf = window.atob(value.image);
            return imf;
        } else {
              return '';
        }
    }
}