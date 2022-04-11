import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todo: boolean = true, desde: number = 1 ): string {


    value = value.toLocaleLowerCase();

    console.log(value);

    let nombres = value.split(' ');
    console.log(nombres);

    if ( todo === true ) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(desde);
      });
      console.log(nombres);
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(desde);
    }

    return nombres.join(' ');

  }

}
