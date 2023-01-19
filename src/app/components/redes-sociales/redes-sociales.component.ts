import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import Red_social from '../../schema/red_social';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected redes_sociales = new Array<Red_social>();
  protected mensaje : any = undefined;
  protected selectedRed_social : Red_social = this.Limpiar_red_social();

  protected modal_peticion = "add-red-social";

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_redes_sociales();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedRed_social.nombre_logo = name_icon;
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

  protected Add_red_social() : void{
    this.selectedRed_social.id_red_social = this.redes_sociales.length + 1;
    this.redes_sociales.push(this.selectedRed_social);
    this.mensaje = 'Red social añadida';
    this.selectedRed_social = this.Limpiar_red_social();
  }

  protected Delete_item_red_social(id:number) : void{
    if(confirm("Estas seguro que deseas eliminar la red social")){
      this.redes_sociales = this.redes_sociales.filter(i => i.id_red_social != id);
    }
  }

  private Limpiar_red_social() : Red_social{
    return {
      id_red_social : 0,
      nombre : '',
      nombre_logo : '',
      link : ''
    }
  }

  protected Reiniciar() : void{
    this.selectedRed_social = this.Limpiar_red_social();
    this.mensaje  = undefined;
  }
}