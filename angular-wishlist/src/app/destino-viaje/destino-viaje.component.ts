import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent implements OnInit{
  @Input() nombre: string;
  constructor() {
    this.nombre = ''
  }

  ngOnInit(): void {
      
  }
}
