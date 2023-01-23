import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hola(){
    alert("Bienvenido a DAW");
  }
  irA(){
      alert("quieres ir a otra página...");
  }
}

