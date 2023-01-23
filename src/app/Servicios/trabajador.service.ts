import { Injectable } from '@angular/core';
import { Trabajador } from '../Modulos/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor() { }

  title="Listado de trabajadores";

  //declarar la variable trabajadores array del tipo trabajador
  trabajadores:Array<Trabajador>=[
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
  ];

  getTrabajadores(){
    return this.trabajadores;
  }

  getTitle(){
    return this.title;
  }

    // metodo para borrar el trabajador pasado por id del array de trabajadores
    borrar(id:number){

      let pos = this.trabajadores.findIndex(t => t.id===id);
      this.trabajadores.splice(pos,1);
    }

    // metodo para sumar un voto al trabajador pasado por id
    sumaVoto(id:number){

      let trab=this.trabajadores.find(t => t.id===id);
      trab!.votos++;

    }

    // metodo para restar un voto al trabajador pasado por id
    restaVoto(id:number){
      let trab = this.trabajadores.find(t => t.id=== id);
        if(trab!.votos > 0){
        trab!.votos--;
      }else{
        alert("No se pueden restar más votos");
      }

    }

}
