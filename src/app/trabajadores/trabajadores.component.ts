import { Component } from '@angular/core';
import { Trabajador } from '../Modulos/trabajador';
import { TrabajadorService } from '../Servicios/trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  trabajadores:Trabajador[]=[];
  title="Listado de trabajadores";

  constructor(private servicioTrabajadores:TrabajadorService){
  }

  ngOnInit(){
    this.trabajadores=this.servicioTrabajadores.getTrabajadores();
    console.log("prueba");
  }

  like(id:number){
    this.servicioTrabajadores.sumaVoto(id);
  }

  unlike(id:number){
    this.servicioTrabajadores.restaVoto(id);
  }

  borrar(id:number){
    this.servicioTrabajadores.borrar(id);
  }


}




