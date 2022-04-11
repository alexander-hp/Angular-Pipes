import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  nombre : string    = 'Variable';
  nombre1: string    = 'AleXaNDer HERnandeZ';

  arreglo: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi     : number    = Math.PI;
  porcentaje         = 0.59851;
  salario: number    = 3686.35168;
  fecha  : Date      = new Date();
  activar: boolean   = true;
  caracter:string    = '*';

  idioma  : string   = 'en';
  videoURL: string   = 'https://www.youtube.com/embed/UKVzrlHI-E4';


  informacion  = {
    nombre:   'alexander',
    apellido: 'Hernandez',
    edad:     '20',
    estudia:   true,
      direccion: {
        Calle:  '1 Sur',
        Av:     '9 y 11'
      }
  };

  ValorPromesa = new Promise<string> ( (resolve, reject) => {

    setTimeout(() => {

      resolve(  'esta es una promesa'  );

    }, 3650);

  });

}
