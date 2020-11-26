import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stateToText'
})
export class ConvertStateToText implements PipeTransform {

    transform(value: number): string {
        return value === 1 ? 'Active' : 'Inactive';
    }

}