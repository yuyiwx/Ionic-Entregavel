import { Component } from '@angular/core';
import { Moeda } from '../classes'
import { FavIconsService } from '../fav-icons.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private Moedas:Moeda[];
  constructor(public service: FavIconsService) 
  {
    this.Moedas = service.getFavorites();
  }

}
let firstName, lastName;
function handleFirstNameValue(event) {
  firstName = event.target.value;
}
function handleLastNameValue(event) {
  lastName = event.target.value;
}
