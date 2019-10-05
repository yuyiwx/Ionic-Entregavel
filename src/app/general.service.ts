import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  name: string;
  value: number;
  constructor(name:string, value:number)
  {
    this.name = name;
    this.value = value;
  }
}

