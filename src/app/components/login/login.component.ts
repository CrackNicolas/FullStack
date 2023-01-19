import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Usuario from 'src/app/schema/usuario';
import { LoadScriptsService } from '../../services/load-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected mensaje_error:any = undefined;
  protected selectedUsuario : Usuario = this.Limpiar();

  constructor(private router:Router, private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
    load_script.load_files("movimiento");
  }

  ngOnInit(): void {}

  protected Autenticar() : void{
    if(this.Validar_datos()){
      environment.sesion.edicion_permitida = true;
      environment.sesion.nombre_button = 'CERRAR SESION';
      environment.sesion.ruta_destino = '';
      this.router.navigate(['']);
    }else{
      this.mensaje_error = 'Usuario y/o contraseña incorrectos.';
      this.router.navigate(['login']);
    }
  }

  private Validar_datos() : boolean{
    return this.selectedUsuario.nombre == 'Nico' && this.selectedUsuario.password == '1234';
  } 

  private Limpiar() : Usuario {
    return {
      id_usuario:0,
      nombre:"",
      password:""
    }
  } 
}