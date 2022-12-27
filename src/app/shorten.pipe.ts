import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, lenght: number) {
        if (value && value.length > lenght) {
            return value.substr(0, lenght) + ' ...';
        }
        return value;
    }
}