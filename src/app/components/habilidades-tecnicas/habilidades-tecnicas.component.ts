import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from '../../services/load-scripts.service';
import Habilidad, { Estado, Tipo } from '../../schema/habilidad';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrls: ['./habilidades-tecnicas.component.css']
})
export class HabilidadesTecnicasComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje:any = undefined;
  protected title : string = "AÑADIR HABILIDAD";
  protected name_button : string = "REGISTRAR";
  protected habilidades = new Array<Habilidad>();
  
  protected selectedHabilidad = this.Limpiar();
  protected selectedEstado = Estado;

  protected modal_peticion = "add-habilidad-tecnica";

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
    load_script.load_files("slider_control");
  }

  ngOnInit(): void {
    this.Instanciar_habilidades();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedHabilidad.nombre_icono = name_icon;
  }

  private Instanciar_habilidades() : void {
    this.habilidades = [
      {
        id_habilidad : 1, 
        nombre : "HTML5", 
        porcentaje : 80,
        nombre_icono : "icono_html5",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 2, 
        nombre : "CSS3", 
        porcentaje : 80,
        nombre_icono : "icono_css3",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 3, 
        nombre : "JavaScript", 
        porcentaje : 75,
        nombre_icono : "icono_javascript",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 4, 
        nombre : "TypeScript", 
        porcentaje : 85,
        nombre_icono : "icono_typescript",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 5, 
        nombre : "Java", 
        porcentaje : 90,
        nombre_icono : "icono_java",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 6, 
        nombre : "PHP", 
        porcentaje : 80,
        nombre_icono : "icono_php",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 7, 
        nombre : "C++", 
        porcentaje : 60,
        nombre_icono : "icono_c",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 8, 
        nombre : "MySQL", 
        porcentaje : 95,
        nombre_icono : "icono_mysql",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 9, 
        nombre : "MongoDB", 
        porcentaje : 55,
        nombre_icono : "icono_mongodb",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 10, 
        nombre : "Arduino", 
        porcentaje : 45,
        nombre_icono : "icono_arduino",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 11, 
        nombre : "Python", 
        porcentaje : 45,
        nombre_icono : "icono_python",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 12, 
        nombre : "npm", 
        porcentaje : 80,
        nombre_icono : "icono_npm",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 13, 
        nombre : "React", 
        porcentaje : 80,
        nombre_icono : "icono_react",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 14, 
        nombre : "Bootstrap", 
        porcentaje : 90,
        nombre_icono : "icono_bootstrap",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 15, 
        nombre : "Tailwind", 
        porcentaje : 70,
        nombre_icono : "icono_tailwind",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 16, 
        nombre : "Next.js", 
        porcentaje : 75,
        nombre_icono : "icono_next",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 17, 
        nombre : "Angular", 
        porcentaje : 75,
        nombre_icono : "icono_angular",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 18, 
        nombre : "Node.js", 
        porcentaje : 80,
        nombre_icono : "icono_node",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      }
    ];
  }

  protected Add_edit_habilidad_tecnica() : void {
    if(this.selectedHabilidad.id_habilidad == 0){
      this.selectedHabilidad.tipo = Tipo.tecnica;
      this.selectedHabilidad.id_habilidad = this.habilidades.length + 1;
      this.habilidades.push(this.selectedHabilidad);
      this.mensaje = 'Habilidad registrada.';
    }else{
      this.mensaje = 'Habilidad actualizada.';
    }
    this.selectedHabilidad = this.Limpiar();
  }

  protected Edit_habilidad(habilidad:Habilidad) : void{
    this.title = this.Get_title(habilidad.id_habilidad);
    this.selectedHabilidad = habilidad;
  }

  protected Delete_habilidad(id:number) : void {
    if(confirm("Estas seguro que deseas eliminar la habilidad")){
      this.habilidades = this.habilidades.filter(i => i.id_habilidad != id);
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR HABILIDAD" : "EDITAR HABILIDAD";
  }

  private Limpiar() : Habilidad {
    return {
      id_habilidad : 0,
      nombre : '',
      porcentaje : 0,
      nombre_icono : "",      
      tipo : Tipo.blanda,
      estado : Estado.uso_actual
    }
  }

  protected Reiniciar() : void {
    this.selectedHabilidad = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }

}