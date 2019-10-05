import { Component } from '@angular/core';
import { FavIconsService } from '../fav-icons.service';
import { Moeda } from '../classes';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private Moedas:Moeda[];
  constructor(public service: FavIconsService) 
  {
    this.Moedas = service.getCoins();
  }

}
