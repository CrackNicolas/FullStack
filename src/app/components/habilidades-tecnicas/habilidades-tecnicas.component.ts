import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';
import Habilidad, { Estado, Tipo } from '../../schema/habilidad';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrls: ['./habilidades-tecnicas.component.css']
})
export class HabilidadesTecnicasComponent implements OnInit {
  protected habilidades : Habilidad[] = [];

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
  }

  ngOnInit(): void {
    this.Instanciar_habilidades();
  }

  private Instanciar_habilidades() : void {
    this.habilidades = [
      {
        id_habilidad : 1, 
        nombre : "MySQL", 
        porcentaje : 100,
        nombre_icono : "icono_mysql",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 2, 
        nombre : "Bootstrap", 
        porcentaje : 100,
        nombre_icono : "icono_bootstrap",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 3, 
        nombre : "React", 
        porcentaje : 90,
        nombre_icono : "icono_react",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 4, 
        nombre : "Java", 
        porcentaje : 90,
        nombre_icono : "icono_java",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 5, 
        nombre : "Angular", 
        porcentaje : 85,
        nombre_icono : "icono_angular",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 6, 
        nombre : "TypeScript", 
        porcentaje : 85,
        nombre_icono : "icono_typescript",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 7, 
        nombre : "CSS3", 
        porcentaje : 85,
        nombre_icono : "icono_css3",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 8, 
        nombre : "HTML5", 
        porcentaje : 80,
        nombre_icono : "icono_html5",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 9, 
        nombre : "PHP", 
        porcentaje : 80,
        nombre_icono : "icono_php",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 10, 
        nombre : "npm", 
        porcentaje : 80,
        nombre_icono : "icono_npm",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 11, 
        nombre : "Node.js", 
        porcentaje : 80,
        nombre_icono : "icono_node",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 12, 
        nombre : "JavaScript", 
        porcentaje : 80,
        nombre_icono : "icono_javascript",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 13, 
        nombre : "Next.js", 
        porcentaje : 75,
        nombre_icono : "icono_next",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 14, 
        nombre : "Tailwind", 
        porcentaje : 70,
        nombre_icono : "icono_tailwind",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 15, 
        nombre : "C++", 
        porcentaje : 60,
        nombre_icono : "icono_c",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 16, 
        nombre : "MongoDB", 
        porcentaje : 60,
        nombre_icono : "icono_mongodb",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 17, 
        nombre : "Arduino", 
        porcentaje : 45,
        nombre_icono : "icono_arduino",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      },
      {
        id_habilidad : 18, 
        nombre : "Python", 
        porcentaje : 45,
        nombre_icono : "icono_python",
        tipo : Tipo.tecnica,
        estado : Estado.uso_antiguo
      }
    ];
  }
}