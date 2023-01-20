import { Component, OnInit } from '@angular/core';
import Pasatiempo, { Categoria } from '../../schema/pasatiempo';

@Component({
  selector: 'app-pasatiempos',
  templateUrl: './pasatiempos.component.html',
  styleUrls: ['./pasatiempos.component.css']
})
export class PasatiemposComponent implements OnInit {
  protected pasatiempos : Pasatiempo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_pasatiempos();
  }

  private Instanciar_pasatiempos() : void {
    this.pasatiempos = [
      {
        id_pasatiempo : 1,
        descripcion : "He sido un deportista profesional, jugando Billar y Snooker, en un futuro me gustaria tambien jugar Bola 9.",
        nombre_logo : "icono_pool",
        categoria : Categoria.Deportes
      },
      {
        id_pasatiempo : 2,
        descripcion : "En mis ratos libres me gusta tocar guitarra y teclado.",
        nombre_logo : "icono_instrumento",
        categoria : Categoria.Instrumento
      },
      {
        id_pasatiempo : 3,
        descripcion : "En ocaciones tambien me gusta ayudar a otros programadores que apenas estan iniciando en el mundo de la programacion.",
        nombre_logo : "icono_otros",
        categoria : Categoria.Otros
      }
    ];
  }
}