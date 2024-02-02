import { Component, OnInit } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [ DestinoViajeComponent, NgFor, CommonModule ],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent implements OnInit{
  destinos: string[];
  constructor() {
    this.destinos = ['Barranquilla', 'Lima', 'Buenos Aires', 'Barcelona']
  }

  ngOnInit(): void {
      
  }
}

