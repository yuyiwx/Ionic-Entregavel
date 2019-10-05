import { Component, OnInit } from '@angular/core';
import { FavIconsService } from '../fav-icons.service';
import { Moeda } from '../classes';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.page.html',
  styleUrls: ['./adding.page.scss'],
})
export class AddingPage{
  private Moedas:Moeda[];
  private Fav_Moedas:Moeda[];
  constructor(public service: FavIconsService) 
  {
    this.Moedas = service.getCoins();
    this.Fav_Moedas = service.getFavorites();
  }
  Favorito(coin:Moeda)
  {
    this.service.addFavorite(coin);
  }
  Verifica(coin:Moeda)
  {
    this.service.verificaFavorite(coin);
  }
}
