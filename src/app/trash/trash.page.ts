import { Component, OnInit } from '@angular/core';
import { FavIconsService } from '../fav-icons.service';
import { Moeda } from '../classes';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage{

  private Moedas:Moeda[];
  private Fav_Moedas:Moeda[];
  constructor(public service: FavIconsService) 
  {
    this.Moedas = service.getCoins();
    this.Fav_Moedas = service.getFavorites();
  }
  Favorito(coin:Moeda)
  {
    this.service.removeFavorite(coin);
  }
  Verifica(coin:Moeda)
  {
    this.service.verificaFavorite(coin);
  }

}
