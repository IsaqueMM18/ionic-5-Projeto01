import { Componente } from './../../interfaces/interfaces';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  Componentes: Observable<Componente[]>

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.Componentes = this.DataService.getMenu();
  }

}
