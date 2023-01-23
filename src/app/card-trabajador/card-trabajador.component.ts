import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trabajador } from '../Modulos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent {

  // decorador input para el trabajador que se le pasa desde el padre
  @Input() trabajador!:Trabajador

  // decxorador output para el evento likeTrabajador
  @Output() eventoBorrar= new EventEmitter<number>();

  // decxorador output para el evento unlikeTrabajador
  @Output() eventoLike= new EventEmitter<number>();

  // decxrador output para el evento borraTrabajador
  @Output() eventoUnlike= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(id:number){
    this.eventoLike.emit(id);
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(id:number){
    this.eventoUnlike.emit(id);
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  borrarTrabajador(id:number){
    alert("¿Seguro que quieres borrar al trabajador " + id + "?");
    this.eventoBorrar.emit(id);
  }

}

