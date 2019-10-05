import { Injectable } from '@angular/core';
import { Moeda } from '../app/classes'
@Injectable({
  providedIn: 'root'
})
export class FavIconsService {
  private Coins:Moeda[];
  private Fav_Coins:Moeda[];
  private moeda1: Moeda;
  private moeda2: Moeda;
  private moeda3: Moeda;
  private moeda4: Moeda;
  private moeda5: Moeda;
  //private cripto_names = 
  //{'BTC':'Bitcoin',
  //'ETH':'Ethereum',
  //'XMR':'Monero',
  //'LTC':'Litecoin',
  //'NMC':'Namecoin'}
  //private cripto_values = 
  //{'BTC':103950.50,'ETH':181.16,'XMR':75.46,'LTC':72.12}
  constructor()
  {
    this.moeda1 = new Moeda;
    this.moeda1.setNome('Bitcoin');
    this.moeda1.setSigla('BTC');
    this.moeda1.setValor(103950.50);

    this.moeda2 = new Moeda;
    this.moeda2.setNome('Ethereum');
    this.moeda2.setSigla('ETH');
    this.moeda2.setValor(181.16);

    this.moeda3 = new Moeda;
    this.moeda3.setNome('Monero');
    this.moeda3.setSigla('XMR');
    this.moeda3.setValor(75.45);

    this.moeda4 = new Moeda;
    this.moeda4.setNome('Litecoin');
    this.moeda4.setSigla('LTC');
    this.moeda4.setValor(72.12);

    this.moeda5 = new Moeda;
    this.moeda5.setNome('Dogecoin');
    this.moeda5.setSigla('DOGE');
    this.moeda5.setValor(0.002332);

    let array = [this.moeda1,this.moeda2,this.moeda3,this.moeda4,this.moeda5]
    this.Coins = array;
    this.Fav_Coins = []; //ARREGOOOO FALLTOUU
}
getCoins()
{
  return this.Coins;
}

getFavorites()
{
  return this.Fav_Coins;
}
addFavorite(Coin:Moeda)
{
  let moeda:Moeda=Coin ;
  console.log(Coin);
  //console.log(this.Fav_Coins.length);
  let index=this.Fav_Coins.indexOf(Coin)
  if(index == -1)
  {
    this.Fav_Coins.push(Coin);
    console.log("Moeda adicionada oas favoritos!");
  }else{console.log("A moeda já é uma moeda favorita!");}
  console.log(this.Fav_Coins.length);
}
verificaFavorite(Coin:Moeda)
{
  let moeda:Moeda=Coin ;
  console.log(Coin);
  //console.log(this.Fav_Coins.length);
  let index=this.Fav_Coins.indexOf(Coin)
  if(index == -1)
  {
    return 1;
  }
  else 
  {
    return 0;
  }
  
}
removeFavorite(Coin:Moeda)
{
  let moeda:Moeda=Coin ;
  console.log(Coin);
  //console.log(this.Fav_Coins.length);
  let index=this.Fav_Coins.indexOf(Coin)
  if(index != -1)
  {
    this.Fav_Coins.splice(index,1);
    console.log("Moeda adicionada oas favoritos!");
  }else{console.log("A moeda já é uma moeda favorita!");}
  console.log(this.Fav_Coins.length);
}
}