import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor() { }

  public getItems(){
    return [
      {"ItemName":"Protein Powder","Quantity":"4"},
      {"ItemName":"Daily","Quantity":"5"}
      ]
  }
}
