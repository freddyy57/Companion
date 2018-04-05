import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios:any[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;
  usuario_seleccionado:any = {}
  siguiendo:boolean = false;

  constructor(db: AngularFireDatabase) {

    db.list('/usuarios').valueChanges()
    .subscribe( (usuarios: any) => {
       console.log(usuarios);
      this.usuarios = usuarios;
      if ( this.siguiendo ) {
        // si estoy siguiendo a alguien
        for(let usuario of usuarios) {
        if ( usuario.nombre === this.usuario_seleccionado.nombre ) {
          this.lat = usuario.lat;
          console.log(this.lat);
          this.lng = usuario.lng;
          console.log(this.lng);
        }
      }
      }
    } );

  }


  seguir_usuario( usuario: any ) {
    console.log ( usuario );
    this.siguiendo = true;

    this.lat = usuario.lat;
    this.lng = usuario.lng;
    this.usuario_seleccionado = usuario;
  }


  dejar_seguir() {
    this.siguiendo = false;
    this.usuario_seleccionado = {};
  }
}
