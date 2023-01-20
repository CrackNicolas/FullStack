import { Component, OnInit } from '@angular/core';
import Red_social from '../../schema/red_social';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  protected redes_sociales : Red_social[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.Instanciar_redes_sociales();
  }

  private Instanciar_redes_sociales() : void {
    this.redes_sociales = [
      {
        id_red_social: 1,
        nombre : "Email",
        nombre_logo : "icono_email",
        link : "xxxxxxxxxxxxxxxxxxxxxxxxx"
      },
      {
        id_red_social: 2,
        nombre : "Telefono",
        nombre_logo : "icono_telefono",
        link : "yyyyyyyyyyyyyyyyyyyyyyyyy"
      },
      {
        id_red_social: 3,
        nombre : "Linkeding",
        nombre_logo : "icono_linkeding",
        link : "ccccccccccccccccccccccccc"
      }
    ];
  }
}