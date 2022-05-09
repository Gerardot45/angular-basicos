import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spider Man', 'Hulk', 'Thor', 'Iron Man', 'Capitan america', 'Ant Man', 'Dr strange']
  heroeEliminado : String = '';

  borrarheroe(){
    this.heroeEliminado = this.heroes.pop() || ''
  }
}
