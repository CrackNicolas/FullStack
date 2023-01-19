import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import Pasatiempo, { Categoria } from '../../schema/pasatiempo';

@Component({
  selector: 'app-pasatiempos',
  templateUrl: './pasatiempos.component.html',
  styleUrls: ['./pasatiempos.component.css']
})
export class PasatiemposComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR PASATIEMPO';
  protected name_button : string = "REGISTRAR";
  protected pasatiempos = new Array<Pasatiempo>();

  protected selectedPasatiempo : Pasatiempo = this.Limpiar();
  protected selectedCategoria = Categoria;

  protected modal_peticion = "add-pasatiempo";

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_pasatiempos();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedPasatiempo.nombre_logo = name_icon;
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

  protected Add_edit_pasatiempo() : void{
    if(this.selectedPasatiempo.id_pasatiempo == 0){
      this.selectedPasatiempo.id_pasatiempo = this.pasatiempos.length + 1;
      this.pasatiempos.push(this.selectedPasatiempo);
      this.mensaje = 'Pasatiempo registrado.';
    }else{
      this.mensaje = 'Pasatiempo actualizado.';
    }
    this.selectedPasatiempo = this.Limpiar();
  }

  protected Edit_pasatiempo(pasatiempo:Pasatiempo) : void {
    this.Reiniciar();
    this.title = this.Get_title(pasatiempo.id_pasatiempo);
    this.selectedPasatiempo = pasatiempo;
  }

  protected Delete_pasatiempo(id:number) : void {
    if(confirm("Estas seguro que deseas eliminar el pasatiempo")){
      this.pasatiempos = this.pasatiempos.filter(i => i.id_pasatiempo != id);
    }
  }

  private Limpiar() : Pasatiempo {
    return {
      id_pasatiempo : 0,
      descripcion : "",
      nombre_logo : "",
      categoria : Categoria.Otros
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR PASATIEMPO" : "EDITAR PASATIEMPO";
  }

  protected Reiniciar() : void {
    this.selectedPasatiempo = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }

}