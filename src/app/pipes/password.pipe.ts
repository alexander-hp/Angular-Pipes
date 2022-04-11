import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = true, caracter: string = '*'): any {

    let letters = value.split('');
    if (activar) {
    letters = letters.map(letter => {
    return letter.replace(letter, caracter);
    });
    }
    return letters.join(' ');




    // let asterisco: string = caracter ;

    // let result: string = value;



    // if (activar) {

    //   result = asterisco.repeat(value.length);

    // }



    // return result;
  }

}
